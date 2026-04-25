const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for image processing
const IMAGE_CONFIG = {
  chillerBanners: {
    width: 800,
    height: 400,
    quality: 85,
    format: 'jpeg'
  },
  serviceImages: {
    width: 600,
    height: 400,
    quality: 85,
    format: 'jpeg'
  }
};

// Paths
const INPUT_DIR = path.join(__dirname, 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Chiller banner images to process
const CHILLER_IMAGES = [
  'bluestar-screw-chiller.jpg',
  'daikin-screw-chiller.jpg',
  'york-screw-chiller.png',
  'carrier-screw-chiller.jpg',
  'voltas-screw-chiller.jpg'
];

// Service images to process
const SERVICE_IMAGES = [
  'chiller-installation.jpg',
  'chiller-maintenance.jpg',
  'chiller-repair.jpg',
  'chiller-overhauling.jpg',
  'chiller-spare-parts.jpg',
  'chiller-energy-audit.jpg'
];

async function processImage(inputPath, outputPath, config) {
  try {
    console.log(`Processing: ${path.basename(inputPath)}`);
    
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center',
        background: { r: 255, g: 255, b: 255 }
      })
      .jpeg({ quality: config.quality })
      .toFile(outputPath);
    
    console.log(`✓ Processed: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function processChillerImages() {
  console.log('🖼️  Processing Chiller Banner Images...');
  console.log('Target size: 800x400px\n');
  
  const chillerDir = path.join(INPUT_DIR, 'chillers');
  
  for (const imageName of CHILLER_IMAGES) {
    const inputPath = path.join(chillerDir, imageName);
    const outputPath = path.join(chillerDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      await processImage(inputPath, outputPath, IMAGE_CONFIG.chillerBanners);
    } else {
      console.log(`⚠️  Image not found: ${imageName}`);
    }
  }
}

async function processServiceImages() {
  console.log('\n🔧 Processing Service Images...');
  console.log('Target size: 600x400px\n');
  
  const serviceDir = path.join(INPUT_DIR, 'services');
  
  for (const imageName of SERVICE_IMAGES) {
    const inputPath = path.join(serviceDir, imageName);
    const outputPath = path.join(serviceDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      await processImage(inputPath, outputPath, IMAGE_CONFIG.serviceImages);
    } else {
      console.log(`⚠️  Image not found: ${imageName}`);
    }
  }
}

async function createBackup() {
  console.log('📦 Creating backup of original images...');
  
  const backupDir = path.join(__dirname, 'public', 'images-backup');
  
  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Backup chiller images
  const chillerDir = path.join(INPUT_DIR, 'chillers');
  const chillerBackupDir = path.join(backupDir, 'chillers');
  
  if (!fs.existsSync(chillerBackupDir)) {
    fs.mkdirSync(chillerBackupDir, { recursive: true });
  }
  
  for (const imageName of CHILLER_IMAGES) {
    const inputPath = path.join(chillerDir, imageName);
    const backupPath = path.join(chillerBackupDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`✓ Backed up: ${imageName}`);
    }
  }
  
  // Backup service images
  const serviceDir = path.join(INPUT_DIR, 'services');
  const serviceBackupDir = path.join(backupDir, 'services');
  
  if (!fs.existsSync(serviceBackupDir)) {
    fs.mkdirSync(serviceBackupDir, { recursive: true });
  }
  
  for (const imageName of SERVICE_IMAGES) {
    const inputPath = path.join(serviceDir, imageName);
    const backupPath = path.join(serviceBackupDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`✓ Backed up: ${imageName}`);
    }
  }
  
  console.log('✅ Backup completed!\n');
}

async function main() {
  console.log('🚀 SRP Airconditioning - Image Processor');
  console.log('=====================================\n');
  
  // Check if Sharp is installed
  try {
    await sharp.metadata('test.jpg');
  } catch (error) {
    console.log('❌ Sharp not installed. Installing Sharp...');
    console.log('Run: npm install sharp');
    process.exit(1);
  }
  
  // Create backup first
  await createBackup();
  
  // Process chiller images
  await processChillerImages();
  
  // Process service images
  await processServiceImages();
  
  console.log('\n🎉 Image processing completed!');
  console.log('📁 Original images backed up to: public/images-backup/');
  console.log('📁 Processed images in: public/images/');
  console.log('\n✨ Your website images are now optimized and properly sized!');
}

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the processor
if (require.main === module) {
  main();
}

module.exports = {
  processImage,
  processChillerImages,
  processServiceImages,
  createBackup
};

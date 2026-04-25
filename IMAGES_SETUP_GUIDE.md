# Images Setup Guide for SRP Airconditioning Website

## 📁 Required Image Structure

Create the following folder structure in your project:

```
public/
├── images/
│   ├── chillers/
│   │   ├── bluestar-screw-chiller.jpg
│   │   ├── daikin-screw-chiller.jpg
│   │   ├── york-screw-chiller.jpg
│   │   └── carrier-screw-chiller.jpg
│   └── services/
│       ├── chiller-installation.jpg
│       ├── chiller-maintenance.jpg
│       ├── chiller-repair.jpg
│       ├── chiller-overhauling.jpg
│       ├── chiller-spare-parts.jpg
│       └── chiller-energy-audit.jpg
```

## 🖼️ Image Requirements

### Chiller Banners (Auto-scrolling section)
- **Size**: 800x400px recommended
- **Format**: JPG or PNG
- **Content**: High-quality images of screw chillers from:
  - Bluestar screw chillers
  - Daikin screw chillers  
  - York screw chillers
  - Carrier screw chillers

### Service Images (Services page)
- **Size**: 600x400px recommended
- **Format**: JPG or PNG
- **Content**: Bluestar chiller images showing:
  - Installation process
  - Maintenance work
  - Emergency repair
  - Overhauling service
  - Spare parts inventory
  - Energy audit process

## 🎯 Image Content Guidelines

### For Chiller Banners:
- Show complete chiller units
- Professional industrial setting
- Clean, high-quality photos
- Brand logos visible if possible

### For Service Images:
- Action shots of technicians working
- Close-ups of chiller components
- Professional service environment
- Bluestar equipment preferred

## 📱 Current Implementation

### Auto-scrolling Banners
- ✅ Component created: `ChillerBanners.js`
- ✅ Integrated into Home Page
- ✅ Smooth left-to-right scrolling
- ✅ Brand indicators and descriptions

### Service Images
- ✅ Updated Services page with image containers
- ✅ Added image placeholders with gradients
- ✅ Responsive design for all screen sizes
- ✅ Hover effects and professional layout

### Partners Section
- ✅ Added "Our Partners" section to Home Page
- ✅ Created partner cards with icons
- ✅ Positioned after Services section
- ✅ Call-to-action for partnership inquiries

## 🔄 How to Add Real Images

### Step 1: Create folders
```bash
mkdir -p public/images/chillers
mkdir -p public/images/services
```

### Step 2: Add images
Place your images in the corresponding folders with the exact names specified above.

### Step 3: Update components (Optional)
If you want to change image paths, update these files:
- `components/ChillerBanners.js` - Line 15-18
- `app/services/page.js` - Lines 19, 34, 49, 57, 72, 87

## 🎨 Design Features

### Chiller Banners
- Auto-scrolling carousel
- Smooth transitions
- Brand badges
- Service availability indicators
- Responsive design

### Service Cards
- Image headers with gradients
- Service type badges
- Feature lists with checkmarks
- Hover effects
- Call-to-action buttons

### Partners Section
- Professional card layout
- Icon placeholders
- Hover animations
- Partnership CTA

## 📞 Next Steps

1. **Add real images** to the specified folders
2. **Test the auto-scrolling** functionality
3. **Verify responsive behavior** on different devices
4. **Update alt text** if needed for SEO

---

**Ready to add your chiller images!** The structure is in place and waiting for your visual content.

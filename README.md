# SRP Airconditioning Website

A professional website for SRP Airconditioning - Expert Chiller Services & Repairs in North India.

## Features

- **Modern, Professional Design**: Clean B2B-focused UI built with Next.js and Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**: Home, About Us, Services, Industries Served, and Contact Us
- **Interactive Components**: Contact forms, navigation, and hover effects
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Optimized for speed and user experience

## Pages Structure

### 1. Home Page (`/`)
- Hero section with company introduction
- About SRP Airconditioning overview
- Services overview grid
- Company statistics
- Call-to-action sections

### 2. About Us Page (`/about`)
- Company story and history
- Mission, vision, and values
- Team information
- Quality certifications
- Infrastructure details

### 3. Services Page (`/services`)
- Detailed service offerings:
  - Chiller Installation
  - Preventive Maintenance
  - Emergency Repairs
  - Chiller Overhauling
  - Spare Parts Supply
  - Energy Audits
- Service process explanation
- Why choose us section

### 4. Industries Served Page (`/industries`)
- Manufacturing Industries
- Pharmaceuticals
- Food & Beverage
- Commercial Buildings
- Data Centers
- Chemical Industries
- Success stories/case studies

### 5. Contact Us Page (`/contact`)
- Contact information cards
- Interactive contact form
- Office location map
- Emergency service information
- FAQ section

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom React components
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd srp-airconditioning-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Updating Company Information

1. **Contact Details**: Update in `/components/Footer.js` and `/app/contact/page.js`
2. **Company Stats**: Modify in `/app/page.js` hero section
3. **Services**: Update in `/app/services/page.js`
4. **About Content**: Edit in `/app/about/page.js`

### Brand Colors

The primary color scheme is defined in `/tailwind.config.js`:
- Primary Blue: `#3b82f6` (primary-600)
- Secondary colors for different services

### Adding New Pages

1. Create a new folder in `/app/` directory
2. Add a `page.js` file
3. Update navigation in `/components/Navbar.js`
4. Add footer links in `/components/Footer.js`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site is compatible with:
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## Performance Features

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components load as needed
- **SEO Friendly**: Meta tags and structured data

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Make your changes
2. Test on multiple screen sizes
3. Ensure all links work properly
4. Submit a pull request

## License

This project is proprietary to SRP Airconditioning.

---

**Note**: Replace placeholder contact information, company details, and images with actual SRP Airconditioning data before deployment.

# How to Add Certificates

## Quick Setup

1. Place your certificate images in this folder (`public/certificates/`)
2. Update the certificates array in `src/sections/Certificates.jsx`

## File Names

Name your images descriptively:

- `cert1.png`
- `aws-certification.jpg`
- `react-advanced-cert.png`

## Update Certificates Array

Edit `/src/sections/Certificates.jsx`:

```jsx
const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2024",
    description:
      "Professional certification in cloud architecture and AWS services",
    image: "/certificates/aws-cert.png",
  },
  {
    title: "React Advanced Course",
    issuer: "Udacity",
    date: "December 2023",
    description: "Completed advanced React development course with distinction",
    image: "/certificates/react-udacity.jpg",
  },
  // Add more certificates...
];
```

## Supported Formats

- JPG/JPEG
- PNG
- WebP
- GIF

## Recommended Image Size

- Aspect ratio: 4:3 (e.g., 1200x900px)
- Max file size: 2MB for better performance
- Use optimized images for web

## Preview Features

✓ Thumbnail cards in grid layout
✓ Hover effects with zoom animation
✓ Click to view full-size in lightbox
✓ Certificate details displayed below image
✓ Dark mode support

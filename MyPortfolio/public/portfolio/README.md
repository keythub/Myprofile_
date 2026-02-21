# Portfolio Images Setup

## How to Add Your Images

1. Place your mock sample images in this folder (`public/portfolio/`)
2. Name them descriptively (e.g., `sample1.jpg`, `sample2.png`, etc.)
3. Update the portfolio items in `src/sections/Portfolio.jsx`

## Updating Portfolio Items

Edit the `portfolioItems` array in `/src/sections/Portfolio.jsx`:

```jsx
const portfolioItems = [
  {
    title: "Your Project Title",
    category: "Design Category",
    description: "Brief description of your work",
    image: "/portfolio/your-image-name.jpg", // Path to your image
    tags: ["Tag1", "Tag2"], // Relevant tags
  },
  // Add more items...
];
```

## Supported Image Formats

- JPG/JPEG
- PNG
- WebP
- GIF

## Recommended Image Size

- Aspect ratio: 4:3 (e.g., 1200x900px)
- Keep file sizes under 2MB for better performance
- Use optimized images for web

## Example

If you have a file at `public/portfolio/social-media-design.jpg`, reference it as:

```jsx
image: "/portfolio/social-media-design.jpg";
```

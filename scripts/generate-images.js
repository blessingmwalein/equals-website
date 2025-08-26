const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a simple SVG placeholder
function createSVGPlaceholder(width, height, text, filename) {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1f2937"/>
  <rect x="2" y="2" width="${width-4}" height="${height-4}" fill="#374151" stroke="#6b7280" stroke-width="2"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, filename), svg);
  console.log(`Created ${filename}`);
}

// Create placeholder images
const images = [
  { width: 1200, height: 700, text: "Lending Dashboard", filename: "lending-dashboard.png" },
  { width: 600, height: 400, text: "Analytics Dashboard", filename: "analytics-dashboard.png" },
  { width: 600, height: 400, text: "Credit Scoring", filename: "credit-scoring.png" },
  { width: 300, height: 600, text: "Mobile App", filename: "mobile-lending.png" },
  { width: 600, height: 400, text: "Team Meeting", filename: "team-meeting.png" },
  { width: 600, height: 400, text: "Office Harare", filename: "office-harare.png" },
];

images.forEach(img => {
  createSVGPlaceholder(img.width, img.height, img.text, img.filename);
});

console.log('All placeholder images generated successfully!'); 
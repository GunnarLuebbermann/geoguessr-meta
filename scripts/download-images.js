#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'telephone');

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/19dfb5b1-0cb0-49a5-adb4-9b211585bffc/19.png',
    filename: 'japan-phone.png',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/930c8141-7d6e-4397-a56c-f58b902e85c1/Brasil_-_Códigos_de_área_DDD.png',
    filename: 'brazil-phone.png',
  },
];

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve(filepath);
        });
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file async
        reject(err);
      });
  });
}

async function main() {
  console.log('Downloading reference images...');
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('\n✓ All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error.message);
    process.exit(1);
  }
}

main();

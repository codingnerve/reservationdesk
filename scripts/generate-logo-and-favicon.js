const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const originalLogoPath = path.join(__dirname, '../public/images/logo.png');
  const backupLogoPath = path.join(__dirname, '../public/images/logo-orig.png');

  if (!fs.existsSync(backupLogoPath)) {
    fs.copyFileSync(originalLogoPath, backupLogoPath);
  }

  // 1. Get trimmed bounding box of the whole logo
  const img = sharp(backupLogoPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      const a = data[idx + 3];
      if (a > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 12;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const width = Math.min(info.width - left, maxX - minX + pad * 2);
  const height = Math.min(info.height - top, maxY - minY + pad * 2);

  console.log(`Trimmed logo bounds: left=${left}, top=${top}, width=${width}, height=${height}`);

  // Create clean trimmed logo.png (high resolution transparent PNG)
  await sharp(backupLogoPath)
    .extract({ left, top, width, height })
    .png()
    .toFile(path.join(__dirname, '../public/images/logo.png'));
  console.log('Updated public/images/logo.png with tightly trimmed transparent logo');

  // Also create a version on white background for places that need opaque background or dark footer
  await sharp(backupLogoPath)
    .extract({ left, top, width, height })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(path.join(__dirname, '../public/images/logo-white-bg.png'));

  // 2. Extract emblem specifically for square favicon (emblem from top to ~y=630)
  // Let's find emblem bounds specifically
  let embMinX = info.width, embMaxX = 0, embMinY = info.height, embMaxY = 0;
  for (let y = minY; y <= 635; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      if (data[idx + 3] > 20) {
        if (x < embMinX) embMinX = x;
        if (x > embMaxX) embMaxX = x;
        if (y < embMinY) embMinY = y;
        if (y > embMaxY) embMaxY = y;
      }
    }
  }

  const embWidth = embMaxX - embMinX;
  const embHeight = embMaxY - embMinY;
  console.log(`Emblem bounds: x=${embMinX}, y=${embMinY}, w=${embWidth}, h=${embHeight}`);

  // Fit emblem into a square with a small amount of breathing room
  const squareSize = Math.max(embWidth, embHeight);
  const embPad = Math.round(squareSize * 0.08);
  const finalSquare = squareSize + embPad * 2;

  const emblemBuffer = await sharp(backupLogoPath)
    .extract({
      left: Math.max(0, embMinX),
      top: Math.max(0, embMinY),
      width: Math.min(info.width - embMinX, embWidth),
      height: Math.min(info.height - embMinY, embHeight),
    })
    .toBuffer();

  // Create square transparent emblem with padding
  const squareEmblem = await sharp({
    create: {
      width: finalSquare,
      height: finalSquare,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: emblemBuffer,
        gravity: 'centre',
      },
    ])
    .png()
    .toBuffer();

  // Also create square emblem with rounded white card or clean circle backing for optimal visibility on dark tabs/browsers
  const squareEmblemWithBacking = await sharp({
    create: {
      width: finalSquare,
      height: finalSquare,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      {
        input: emblemBuffer,
        gravity: 'centre',
      },
    ])
    .png()
    .toBuffer();

  // Generate all standard favicon sizes:
  // 1. app/icon.png (512x512 & 32x32 for Next.js App Router)
  await sharp(squareEmblem)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../app/icon.png'));

  // 2. app/apple-icon.png (180x180)
  await sharp(squareEmblemWithBacking)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../app/apple-icon.png'));

  // 3. public/favicon-32x32.png
  await sharp(squareEmblem)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));

  // 4. public/favicon-16x16.png
  await sharp(squareEmblem)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-16x16.png'));

  // 5. public/images/favicon-32x32.png & public/images/favicon-16x16.png
  await sharp(squareEmblem)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/images/favicon-32x32.png'));
  await sharp(squareEmblem)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, '../public/images/favicon-16x16.png'));

  // 6. public/apple-touch-icon.png
  await sharp(squareEmblemWithBacking)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // 7. public/favicon.ico & app/favicon.ico
  // A 32x32 or 48x48 PNG can be written directly or wrapped in ICO format.
  // Modern browsers and Next.js support 32x32 PNG as favicon.ico, but let's write standard ICO binary format for 16, 32, 48.
  const icon32Buffer = await sharp(squareEmblem).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), icon32Buffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icon32Buffer);

  console.log('Successfully generated all favicons and icons from logo.png!');
}

main().catch(console.error);

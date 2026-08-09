const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const projectRoot = path.join(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');

// Files to compress — convert to WebP
const targets = [
  { input: 'upwork-top-rated-plus.png', output: 'upwork-top-rated-plus.webp', quality: 82 },
  { input: 'upwork-profile-new.png',    output: 'upwork-profile-new.webp',    quality: 82 },
  { input: 'workspace.png',             output: 'workspace.webp',             quality: 82 },
  { input: 'basis-award.png',           output: 'basis-award.webp',           quality: 85 },
  { input: 'strategy-template-preview.png', output: 'strategy-template-preview.webp', quality: 82 },
  { input: 'media__1780994660272.png',   output: 'media__1780994660272.webp',  quality: 82 },
  { input: 'content-pillar-wheel.png',   output: 'content-pillar-wheel.webp',  quality: 85 },
  { input: 'basis.png',                 output: 'basis.webp',                 quality: 85 },
  { input: 'media__1781524851263.png',   output: 'media__1781524851263.webp',  quality: 82 },
  { input: 'media__1782577258264.png',   output: 'media__1782577258264.webp',  quality: 82 },
];

// Also compress JPEGs
const jpegTargets = [
  { input: 'abul-hasan-about-hero.jpg', output: 'abul-hasan-about-hero.webp', quality: 82 },
  { input: 'abul-hasan-office.jpg',     output: 'abul-hasan-office.webp',     quality: 82 },
  { input: 'abul-hasan.jpg',            output: 'abul-hasan.webp',            quality: 82 },
  { input: 'basis-award-2021.jpg',      output: 'basis-award-2021.webp',      quality: 85 },
  { input: 'basis-award-new.jpg',       output: 'basis-award-new.webp',       quality: 85 },
  { input: 'og-image.jpg',              output: null,                          quality: 75, isOg: true }, // keep as jpg, just compress
];

async function compress() {
  let totalSaved = 0;

  for (const t of [...targets, ...jpegTargets]) {
    const inputPath = t.isOg
      ? path.join(projectRoot, 'public', t.input)
      : path.join(imagesDir, t.input);

    if (!fs.existsSync(inputPath)) {
      console.log(`  SKIP (not found): ${t.input}`);
      continue;
    }

    const originalSize = fs.statSync(inputPath).size;

    try {
      if (t.output === null) {
        // Just re-compress JPEG in-place
        const tempPath = inputPath + '.tmp';
        await sharp(inputPath).jpeg({ quality: t.quality, mozjpeg: true }).toFile(tempPath);
        fs.renameSync(tempPath, inputPath);
        const newSize = fs.statSync(inputPath).size;
        const saved = originalSize - newSize;
        totalSaved += saved;
        console.log(`  ✓ ${t.input}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
      } else {
        const outputPath = t.isOg
          ? path.join(__dirname, 'public', t.output)
          : path.join(imagesDir, t.output);
        await sharp(inputPath).webp({ quality: t.quality }).toFile(outputPath);
        const newSize = fs.statSync(outputPath).size;
        const saved = originalSize - newSize;
        totalSaved += saved;
        console.log(`  ✓ ${t.input} → ${t.output}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
      }
    } catch (e) {
      console.error(`  ✗ Error processing ${t.input}:`, e.message);
    }
  }

  console.log(`\n  Total saved: ${(totalSaved/1024).toFixed(0)} KB`);
}

compress();

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'guide');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Google Drive file IDs → local filenames
const images = [
  { id: '1vecz6RxEQu1p1TVB08XF2DqF4Fxnt1sx', name: 'guide-hero-banner' },
  { id: '1Lc1ZoNq7a-vjstuiC4Cf9HhYHu22pyJQ', name: 'guide-hasan-growth-loop' },
  { id: '15qKvMooU4f_SIsc7wilhClVXN_jQo7pL', name: 'guide-step1-audit' },
  { id: '13xi9lma9Cln-wB9GA2uBouV3zEvSgOL_', name: 'guide-step3-personas' },
  { id: '1KEuq0rxh8n3ldxH561e0C6MAUcpINSTb', name: 'guide-step5-platforms' },
  { id: '1Of8zWfdwTs8nY9b-MLNSahBCCQMYcslB', name: 'guide-step7-calendar' },
  { id: '18ObQi0Y_rHRiL1oIlZpPv1We0AADT1yJ', name: 'guide-step9-kpi' },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    proto.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        return download(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    const url = `https://lh3.googleusercontent.com/d/${img.id}`;
    const tmpPath = path.join(outputDir, `${img.name}.tmp`);
    const outPath = path.join(outputDir, `${img.name}.webp`);

    try {
      console.log(`  Downloading ${img.name}...`);
      await download(url, tmpPath);
      const stats = fs.statSync(tmpPath);
      console.log(`    Downloaded: ${(stats.size / 1024).toFixed(0)}KB`);

      await sharp(tmpPath).webp({ quality: 82 }).toFile(outPath);
      const webpStats = fs.statSync(outPath);
      fs.unlinkSync(tmpPath);
      console.log(`  ✓ ${img.name}.webp: ${(webpStats.size / 1024).toFixed(0)}KB`);
    } catch (e) {
      console.error(`  ✗ Failed: ${img.name} — ${e.message}`);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
}

run();

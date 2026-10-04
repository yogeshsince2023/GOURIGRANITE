const fs = require('fs');
const path = require('path');

function copyFiles(parentDir, prefix, currentDir) {
    if (!fs.existsSync(currentDir)) return;
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const e of entries) {
        const itemPath = path.join(currentDir, e.name);
        const dotTarget = path.join(parentDir, `${prefix}.${e.name}`);
        if (e.isFile()) {
            try {
                if (!fs.existsSync(dotTarget)) {
                    fs.copyFileSync(itemPath, dotTarget);
                }
            } catch (err) {
                // Ignore copy errors
            }
        } else if (e.isDirectory()) {
            copyFiles(parentDir, `${prefix}.${e.name}`, itemPath);
        }
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        const fullPath = path.join(dir, e.name);
        if (e.isDirectory()) {
            if (e.name.startsWith('__next.')) {
                copyFiles(dir, e.name, fullPath);
            }
            walk(fullPath);
        }
    }
}

const outDir = path.join(__dirname, '..', 'out');
walk(outDir);
console.log('✓ Next.js static export RSC paths mapped successfully.');

// Ensure .htaccess from public is copied to out/.htaccess
const htaccessSrc = path.join(__dirname, '..', 'public', '.htaccess');
const htaccessDest = path.join(outDir, '.htaccess');
if (fs.existsSync(htaccessSrc)) {
    fs.copyFileSync(htaccessSrc, htaccessDest);
    console.log('✓ .htaccess copied to out/.htaccess successfully.');
}


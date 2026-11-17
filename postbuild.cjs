const fs=require('node:fs');const path=require('node:path');
for(const file of ['sw.js','manifest.webmanifest','icon-512.png']){const from=path.join(__dirname,'web',file),to=path.join(__dirname,'www',file);fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to);}
console.log('Offline assets copied');

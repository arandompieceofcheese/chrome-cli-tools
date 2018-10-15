const fs = require('fs-extra');

(async()=>{

  let manifest = JSON.parse(await fs.readFile(__dirname+'/defaults/manifest.json', 'utf8'));
  manifest[process.argv[2]] = process.argv.slice(3).join(' ');
  await fs.writeFile(__dirname + '/defaults/manifest.json', JSON.stringify(manifest));

  process.exit(0);
})();
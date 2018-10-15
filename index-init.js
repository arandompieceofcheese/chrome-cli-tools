const prompt = require('./input-helper.js'), fs = require('fs-extra');

(async()=>{

  let manifest = JSON.parse(await fs.readFile(__dirname + '/defaults/manifest.json', 'utf8'));
  let name = (await prompt('name (' + manifest.name + ')')).trim();
  let version = (await prompt('version (' + manifest.version + ')')).trim();
  let description = (await prompt('description (' + manifest.description + ')')).trim();
  let author = (await prompt('author (' + manifest.author + ')')).trim();

  manifest.name = name.length ? name : manifest.name;
  manifest.version = version.length ? version : manifest.version;
  manifest.description = description.length ? description : manifest.description;
  manifest.author = author.length ? author : manifest.author;

  manifest = JSON.stringify(manifest);

  await prompt("Is this ok?\n"+manifest+"\n^C to quit");

  await fs.writeFile('./manifest.json', manifest);
  process.exit(0);
})();
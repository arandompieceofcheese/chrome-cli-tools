const fs = require('fs-extra');
(async()=>{
  switch(process.argv[2]){
    case 'browser_action':
      if(!await fs.exists('./manifest.json')) process.exit(1, console.log("Can't find manifest, exiting..."));
      let manifest = JSON.parse(await fs.readFile('./manifest.json', 'utf8'));
      manifest.broswer_action = {default_icon: "icon32.png", default_title: process.argv[3] || "My Extention", default_popup: "popup.html"};
      await fs.writeFile('./manifest.json', JSON.stringify(manifest));
      await fs.copy(__dirname + '/defaults/icon32.png', '.');
      await fs.copy(__dirname + '/defaults/popup.html', '.');
      break;



    default:
      console.log(process.argv[2]);
  }
})();
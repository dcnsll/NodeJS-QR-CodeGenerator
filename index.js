import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: 'URL',
      message: 'Please enter a valid URL !'
    },
  ])
  .then(answers => {
    const website = answers.URL
    var qr_svg = qr.image(website);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    fs.appendFile('URL.txt', website, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
  });
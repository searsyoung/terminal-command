const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile("./touch.txt", "", err => {
    if (err) throw err;

    console.log("File created successfully.");
    this.ls();
  });
};

module.exports.mkdir = () => {
  fs.mkdir("./newDir", err => {
    if (err) throw err;

    console.log("Directory created successfully.");
    this.ls();
  });
};

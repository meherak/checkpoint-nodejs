const fs = require("fs");
fs.readFile(process.argv[2], (err, file) => {
  err ? console.log(err) : console.log(file.toString().split("/n").length - 1);
});

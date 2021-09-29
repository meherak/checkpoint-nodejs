let fs = require("fs");
let path = require("path");

let dir = process.argv[2];
let ext = "." + process.argv[3];

fs.readdir(dir, (err, files) => {
  err
    ? console.log(err)
    : files.forEach((file) =>
        path.extname(file) == ext ? console.log(file) : null
      );
});

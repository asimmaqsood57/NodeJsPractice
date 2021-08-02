const path = require("path");

console.log(path.basename("C:\\temp\\myfile.html"));
console.log(path.dirname("C:\\temp\\myfile.html"));

const a3 = path.extname(__filename);

console.log(a3);

console.log(__filename);

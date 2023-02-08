import fs from 'fs';
import csvToJson from 'convert-csv-to-json';

// const dataCSV = fs.readFileSync(
//   '../data/FICHIER CAISSE NATH MODIFIE 020223.csv',
//   'utf8'
// );

let fileInputName = '../data/products.csv';
let fileOutputName = '../data/products.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);

// console.log(dataCSV);

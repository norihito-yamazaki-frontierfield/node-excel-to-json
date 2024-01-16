const xlsx = require('xlsx');

function convertExcelToJson(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data;
}

const excelData = convertExcelToJson('sample.xlsx');
console.log(excelData);

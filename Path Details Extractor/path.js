const path = require('path');
function extractPathDetails(filePath) {
    return {
        directoryName: path.dirname(filePath),
        fileName: path.basename(filePath),
        fileExtension: path.extname(filePath),
        absolutePath: path.resolve(filePath)
    };
}

const filePath = "C:\Users\Teachers\Desktop\TASK\Path Details Extractor>";
console.log(extractPathDetails(filePath));
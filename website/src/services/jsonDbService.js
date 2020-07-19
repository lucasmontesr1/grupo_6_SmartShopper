const fs = require('fs');
const path = require('path');

module.exports = {
    getFile: (fileName) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..','data',`${fileName}.json`)));
    },
    updateFile: (fileName, newData) => {
        if (Array.isArray(newData)) {
            let oldBuf = Buffer.from(JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', `${fileName}.json`))));
            let newBuf = Buffer.from(newData);
            if (!oldBuf.equals(newBuf)) {
              fs.writeFileSync(path.resolve(__dirname, '..','data',`${fileName}.json`), JSON.stringify(newData));
              console.log('Succesfully updated file')
            };
            
        }else{
            console.log(('File was not updated'));
        }
        
    },
}
const fs = require('fs');

function removeFromArray(array, removeMe) {
    let newArray = array.filter((value) => value !== removeMe);
    return newArray;
}

function parseFiles(mode) {
    fs.readFile(`${mode}.csv`, 'utf8', function(err, data) {
        createJSON(data);
    });
    
    class preStop {
            constructor(id, code, city, stopName, meta1, meta2) {
                this.id = id;
                this.code = code;
                this.city = city;
                this.stopName = stopName;
                this.meta1 = meta1;
                this.meta2 = meta2;
            }
    }


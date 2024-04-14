const fs = require('fs');

function parseFiles(mode) {
    fs.readFile(`${mode}.csv`, 'utf8', function(err, data) {
        createJSON(data);
    });
    
    class preStopUI {
        constructor(id, code, city, stopName, route, meta1, meta2) {
            this.id = id;
            this.code = code;
            this.city = city;
            this.stopName = stopName;
            this.route = route;
            this.meta1 = meta1;
            this.meta2 = meta2;
        }
    }

    let preAllStopsUI = [];

    function createJSON(data) {
        const rows = data.split('\n');

        for (let i = 0; i < rows.length; i++) {
            let row = row[i].split(',');
            let id = row[2];
            let code = row[3];
            let city = row[0];
            let stopName = row[1];
            let route = row[4];
            let meta1 = row[5];
            let meta2 = row[6];
            if (id) {
                preAllStopsUI.push(new preStopUI(id, code, city, stopName, route, meta1, meta2));
            }
        }

        fs.writeFile(`${mode}.json`, JSON.stringify(preAllStopsUI), err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
            }
        });
    }
}

parseFiles('air');
parseFiles('bahn');
parseFiles('bus');
parseFiles('omega');
parseFiles('rail');
parseFiles('railLumeva');
parseFiles('railScar');
parseFiles('sail');
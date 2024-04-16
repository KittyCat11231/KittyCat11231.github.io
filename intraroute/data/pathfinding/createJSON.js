const fs = require('fs');

function parseFiles(mode) {
    class preStop {
        constructor(id, adjStop, weight, routes) {
            this.id = id;
            this.adjStop = adjStop;
            this.weight = weight;
            this.routes = routes;
        }
    }
    
    let preAllStops = [];
    
    function createJSON(data) {
        const rows = data.split('\n');
    
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let thisStop = row[2];
            let adjStop = row[3];
            let weight = row[4];
            let routes = [];
            for (let j = 5; j < Infinity; j++) {
                if (!(row[j])) {
                    break;
                }
                routes.push(row[j]);
            }
            if (thisStop) {
                preAllStops.push(new preStop(thisStop, adjStop, weight, routes));
            }
        }
    
        fs.writeFile(`${mode}.json`, JSON.stringify(preAllStops), err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
            }
        });
    }

    fs.readFile(`${mode}.csv`, 'utf8', function(err, data) {
        createJSON(data);
    });
}

parseFiles('air');
parseFiles('bahn');
parseFiles('bus');
parseFiles('omega');
parseFiles('rail');
parseFiles('railLumeva');
parseFiles('railScar');
parseFiles('sail');
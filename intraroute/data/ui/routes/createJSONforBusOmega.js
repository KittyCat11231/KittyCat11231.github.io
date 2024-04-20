const fs = require('fs');

function parseFiles(mode) {
    class route {
        constructor(id, routeNum, terminus, terminusCity, terminusStopName, useFullNameIn) {
            this.id = id;
            this.routeNum = routeNum;
            this.terminus = terminus;
            this.terminusCity = terminusCity;
            this.terminusStopName = terminusStopName;
            this.useFullNameIn = useFullNameIn;
        }
    }

    function createJSON(data) {
        const rows = data.split('\n');
        
        let preAllRoutes = [];

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let id = row[0];
            let routeNum = row[1];
            let terminus = row[2];
            let terminusCity = row[3];
            let terminusStopName = row[4];
            let useFullNameIn = null;
            if (row[5]) {
                useFullNameIn = [];
                for (let i = 5; i < Infinity; i++) {
                    if (!(row[i])) {
                        break;
                    }
                    useFullNameIn.push(row[i]);
                }
            }
            if (id) {
                preAllRoutes.push(new route(id, type, routeNum, terminus, terminusCity, terminusStopName, useFullNameIn))
            }
        }

        fs.writeFile(`${mode}.json`, JSON.stringify(preAllRoutes), err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
            }
        })
    }

    fs.readFile(`${mode}.csv`, 'utf8', function(err, data) {
        createJSON(data)
    })
}

parseFiles('bus');
parseFiles('omega');
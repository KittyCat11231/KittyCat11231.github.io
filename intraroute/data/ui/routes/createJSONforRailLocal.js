const fs = require('fs');

function parseFiles(mode) {
    class route {
        constructor(id, routeNum, routeName, terminus, terminusCity, terminusStopName, useFullNameIn) {
            this.id = id;
            this.routeNum = routeNum;
            this.routeName = routeName;
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
            let routeName = row[2]
            let terminus = row[3];
            let terminusCity = row[4];
            let terminusStopName = row[5];
            let useFullNameIn = null;
            if (row[6]) {
                useFullNameIn = [];
                for (let i = 6; i < Infinity; i++) {
                    if (!(row[i])) {
                        break;
                    }
                    useFullNameIn.push(row[i]);
                }
            }
            if (id) {
                preAllRoutes.push(new route(id, type, routeNum, routeName, terminus, terminusCity, terminusStopName, useFullNameIn))
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

parseFiles('railScar');
parseFiles('railLumeva');
const fs = require('fs');

function parseFiles(mode) {
    class route {
        constructor(id, type, bullet, bulletWhite, bulletAltText, routeName, terminus, terminusCity, terminusStopName, useFullNameIn) {
            this.id = id;
            this.type = type;
            this.bullet = bullet;
            this.bulletWhite = bulletWhite;
            this.bulletAltText = bulletAltText;
            this.routeName = routeName;
            this.terminus = terminus;
            this.terminusCity = terminusCity;
            this.terminusStopName = terminusStopName;
            this.useFullNameIn = useFullNameIn;
        }
    }

    function createJSON(data) {
        const rows = data.split('\n');

        let preAllRoutes = []

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let id = row[0];
            let type = row[1];
            let bullet = row[2];
            let bulletWhite = row[3];
            let bulletAltText = row[4];
            let routeName = row[5];
            let terminus = row[6];
            let terminusCity = row[7];
            let terminusStopName = row[8];
            let useFullNameIn = [];
            if (row[9]) {
                for (let i = 9; i < Infinity; i++) {
                    if (!(row[i])) {
                        break;
                    }
                    useFullNameIn.push(row[i]);
                }
            }
            if (id) {
                preAllRoutes.push(new route(id, type, bullet, bulletWhite, bulletAltText, routeName, terminus, terminusCity, terminusStopName, useFullNameIn));
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
        createJSON(data);
    })
}

parseFiles('bahn');
parseFiles('rail');
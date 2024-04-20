const fs = require('fs');

function parseFiles(mode) {
    class route {
        routeName = false;
        codeshares = null;
        constructor(id, flightNum, type) {
            this.id = id;
            this.flightNum = flightNum;
            this.type = type;
        }
    }

    function createJSON(data) {
        const rows = data.split('\n');

        let preAllRoutes = []

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let id = row[2];
            let flightNum = row[1];
            let type = row[3];
            if (id) {
                preAllRoutes.push(new route(id, flightNum, type));
            }
            if (preAllRoutes[i].type === 'mainline') {
                preAllRoutes[i].routeName = `IntraAir Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'segville') {
                preAllRoutes[i].routeName = `Segville Air Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'waypoint') {
                preAllRoutes[i].routeName = `Waypoint Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'waypointHopper') {
                preAllRoutes[i].routeName = `Waypoint Hopper Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'volanti') {
                preAllRoutes[i].routeName = `Italiani Volanti Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'skywest') {
                preAllRoutes[i].routeName = `SkyWest Airlines Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type.includes('gems')) {
                preAllRoutes[i].routeName = `GEMS Airline Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'heli') {
                preAllRoutes[i].routeName = `IntraAir Heli Lines Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'segHeli') {
                preAllRoutes[i].routeName = `Segville Air Heli Lines Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'heampstead') {
                preAllRoutes[i].routeName = `Heampstead Charter Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'eastern') {
                preAllRoutes[i].routeName = `Eastern Airways Heli Lines Flight ${flightNum}`;
            }
            if (preAllRoutes[i].type === 'poseidon') {
                preAllRoutes[i].routeName = `IntraAir Poseidon Flight ${flightNum}`;
            }
            if (row[5]) {
                preAllRoutes[i].codeshares = [];
                for (let i = 5; i < Infinity; i += 2) {
                    if (!(row[i])) {
                        break;
                    }
                    preAllRoutes.codeshares.push(row[i]);
                }
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

parseFiles('air');
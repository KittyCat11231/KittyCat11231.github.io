const fs = require('fs');

fs.readFile('test.csv', 'utf8', function(err, data) {
    parseData(data);
});

class Stop {
    adjacentStops = new Map();
    shortestTime = Infinity;
    explored = false;
    previousStop;
    pathToStop = false;

    constructor(id) {
        this.id = id;
    }
}

class preStop {
    constructor(id, adjStop, weight, routes) {
        this.id = id;
        this.adjStop = adjStop;
        this.weight = weight;
        this.routes = routes;
    }
}

class Connection {
    constructor(weight, routes) {
        this.weight = weight;
        this.routes = routes;
    }
}

function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

let preAllStops = [];
let allStops = [];

let content;

function parseData(data) {
    const rows = data.split('\n');

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].split(',');
        let thisStop = row[2];
        let adjStop = row[3];
        let weight = row[4];
        let routes = [];
        for (let j = 5; j < 100000; j++) {
            if (!(row[j])) {
                break;
            }
            routes.push(row[j]);
        }
        preAllStops.push(new preStop(thisStop, adjStop, weight, routes));
    }

    allStops.push(new Stop(preAllStops[0].id));
    allStops[0].adjacentStops.set(preAllStops[0].adjStop, new Connection(preAllStops[0].weight, preAllStops[0].routes));

    for (let i = 1; i < preAllStops.length; i++) {
        if (preAllStops[i].thisStop) {
            if (deepEqual(preAllStops[i].id, preAllStops[i - 1].id)) {
                allStops[allStops.length - 1].adjacentStops.set([preAllStops[i].adjStop, new Connection(preAllStops[i].weight, preAllStops[i].routes)]);
            } else {
                allStops.push(new Stop(preAllStops[i].id));
                allStops[allStops.length - 1].adjacentStops.set(preAllStops[i].adjStop, new Connection(preAllStops[i].weight, preAllStops[i].routes));
            }
        }
    }

    fs.writeFile('content-test.json', JSON.stringify(allStops), err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}


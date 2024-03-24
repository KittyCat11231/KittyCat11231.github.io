class Stop {
    adjacentStops = new Map();
    shortestTime = Infinity;
    explored = false;
    pathFromStart = null;
    
    constructor(id) {
        this.id = id;
    }
}

class Connection {
    constructor(weight, routes) {
        this.weight = weight;
        this.routes = routes;
    }
}

const stopsMap = new Map();

let bahnKNX = new Stop("bahnKNX");
bahnKNX.adjacentStops.set("bahnWHO", new Connection(1, ['route 1', 'route 2']));

stopsMap.set("bahnKNX", bahnKNX);


for (let i = 0; i < stops.length; i++) {
    stopsMap.set(stops[i].id, stops[i]);
}

for (i = 0; i < currentStop.adjacentStops.length; i++) {
    // For every adjacent stop, adds shortestTime of the current stop to weight of the adjacent stop and saves as newTime.
    let newTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight;
    
    // If newTime is greater than the
    if (newTime < eval(currentStop.adjacentStops[i].id).shortestTime) {
        eval(currentStop.adjacentStops[i].id).shortestTime = newTime;
    }

    if (newTime < stopsMap.get(currentStop.adjacentStops[i].id).shortestTime) {
        get(currentStop.adjacentStops[i].id).shortestTime = newTime;
    }
}
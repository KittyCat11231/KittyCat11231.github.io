let stops = [
    {
        id: 'bahnKNX', // index 0
        adjacentStops: [
            {id: 'bahnWHO', weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            {id: 'bahnZQL', weight: 1, routes: ['bahn1south', 'bahn1Jsouth']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnSHC', // index 1
        adjacentStops: [
            {id: 'bahnSHD', weight: 1, routes: ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']},
            {id: 'bahnWHO', weight: 1, routes: ['bahn1Jsouth', 'bahn1JXsouth']},
            {id: 'bahnWHQ', weight: 1, routes: ['bahn1Inorth']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnSHD', // index 2
        adjacentStops: [
            {id: 'bahnSHC', weight: 1, routes: ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnWHO', // index 3
        adjacentStops: [
            {id: 'bahnKNX', weight: 1, routes: ['bahn1south', 'bahn1Jsouth']},
            {id: 'bahnSHC', weight: 1, routes: ['bahn1Jnorth', 'bahn1JXnorth']},
            {id: 'bahnWHQ', weight: 1, routes: ['bahn1north', 'bahn1Xnorth']},
            {id: 'bahnZQL', weight: 1, routes: ['bahn1Xsouth', 'bahn1JXsouth']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnWHQ', // index 4
        adjacentStops: [
            {id: 'bahnSHC', weight: 1, routes: ['bahn1Isouth']},
            {id: 'bahnWHO', weight: 1, routes: ['bahn1south', 'bahn1Xsouth']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnZQA', // index 5
        adjacentStops: [
            {id: 'bahnZQL', weight: 1, routes: ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']},
            {id: 'bahnZQT', weight: 1, routes: ['bahnZQccw']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnZQL', // index 6
        adjacentStops: [
            {id: 'bahnKNX', weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            {id: 'bahnWHO', weight: 1, routes: ['bahn1Xnorth', 'bahn1JXnorth']},
            {id: 'bahnZQA', weight: 1, routes: ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']},
            {id: 'bahnZQT', weight: 1, routes: ['bahnZQcw']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    },
    {
        id: 'bahnZQT', // index 7
        adjacentStops: [
            {id: 'bahnZQA', weight: 1, routes: ['bahnZQcw']},
            {id: 'bahnZQL', weight: 1, routes: ['bahnZQccw']}
        ],
        shortestTime: Infinity,
        explored: false,
        pathFromStart: null
    }
]

const stopsMap = new Map();

for (let i = 0; i < stops.length; i++) {
    stopsMap.set(stops[i].id, stops[i]);
}

console.log(stopsMap);

let start = stopsMap.get('bahnZQT');
let end = stopsMap.get('bahnSHD');

let path = [];

start.shortestTime = 0;
start.explored = true;

let currentStop = start;
let adjacentToCurrentStop = [];

let exploredStops = [];
let unexploredStops = [];

function checkExplored(stop) {
    if (stop.explored === true) {
        exploredStops.push(stop);
    } else {
        unexploredStops.push(stop);
    }
}

console.log(exploredStops);
console.log(unexploredStops);

for (i = 0; i < stops.length; i++) {
    checkExplored(stops[i]);
}

console.log(exploredStops);
console.log(unexploredStops);

for (i = 0; i < currentStop.adjacentStops.length; i++) {
    // For every adjacent stop, adds shortestTime of the current stop to weight of the adjacent stop and saves as newTime.
    let newTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight;

    if (newTime < stopsMap.get(currentStop.adjacentStops[i].id).shortestTime) {
        get(currentStop.adjacentStops[i].id).shortestTime = newTime;
    }
}

let unexploredStopsTimes = [];

for (i = 0; i < unexploredStops.length; i++) {
    if (unexploredStops[i].shortestTime !== Infinity) {
        unexploredStopsTimes.push([unexploredStops[i], unexploredStops[i].shortestTime])
    }
}

console.log();
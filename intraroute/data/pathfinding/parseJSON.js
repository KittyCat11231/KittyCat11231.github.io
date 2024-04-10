import airData from './air.json' with { type: 'json' };
import bahnData from './bahn.json' with { type: 'json' };
import busData from './bus.json' with { type: 'json' };
import omegaData from './omega.json' with { type: 'json' };
import railData from './rail.json' with { type: 'json' };
import sailData from './sail.json' with { type: 'json' };

class Stop {
    adjacentStops = new Map();
    shortestTime = Infinity;
    explored = false;
    previousStop;
    pathToStop = false;

    // The value in the parenthesis in the constructor is what gets passed into a new Class.
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

let allStops = [];

let airStops = [];
let bahnStops = [];
let busStops = [];
let omegaStops = [];
let railStops = [];
let sailStops = [];

let useAir = false;
let useBahn = true;
let useBus = false;
let useRail = false;
let useSail = false;

function parseJSON(modeStops, modeData) {
    modeStops.push(new Stop(modeData[0].id));
    modeStops[0].adjacentStops.set(modeData[0].adjStop, new Connection(Number(modeData[0].weight), modeData[0].routes));
    for (let i = 1; i < modeData.length; i++) {
        if (!(modeData[i].id === modeData[i - 1].id)) {
            modeStops.push(new Stop(modeData[i].id));
        }
        modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
    }
}

function addToAllStops(modeStops) {
    for (let i = 0; i < modeStops.length; i++) {
        allStops.push(modeStops[i]);
    }
}

if (useAir === true) {
    parseJSON(airStops, airData);
    addToAllStops(airStops);
}
if (useBahn === true) {
    parseJSON(bahnStops, bahnData);
    addToAllStops(bahnStops);
}
if (useBus === true) {
    parseJSON(busStops, busData);
    parseJSON(omegaStops, omegaData);
    addToAllStops(busStops);
    addToAllStops(omegaStops);
}
if (useRail === true) {
    parseJSON(railStops, railData);
    addToAllStops(railStops);
}
if (useSail === true) {
    parseJSON(sailStops, sailData);
    addToAllStops(sailStops);
}

console.log(allStops);

export { allStops };
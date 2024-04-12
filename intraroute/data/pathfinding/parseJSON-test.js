import airData from './air.json' with { type: 'json' };
import bahnData from './bahn.json' with { type: 'json' };
import busData from './bus.json' with { type: 'json' };
import omegaData from './omega.json' with { type: 'json' };
import railData from './rail.json' with { type: 'json' };
import railScarData from './railScar.json' with { type: 'json' };
import railLumevaData from './railLumeva.json' with { type: 'json' };
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
let railScarStops = [];
let railLumevaStops = [];
let sailStops = [];

let useAir = true;
let useBahn = true;
let useBus = true;
let useRail = true;
let useRailLocal = true;
let useSail = true;

function removeFromArray(array, removeMe) {
    let newArray = array.filter((value) => value !== removeMe);
    return newArray;
}

function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function removeAnnoyingStuff(modeData) {
    for (let i = 0; i < modeData.length; i++) {
        for (let j = 0; j < modeData[i].routes.length; j++) {
            if (modeData[i].routes[j] === '\r') {
                modeData[i].routes = removeFromArray(modeData[i].routes, modeData[i].routes[j]);
            } else if (modeData[i].routes[j].includes('\r')) {
                modeData[i].routes[j] = modeData[i].routes[j].replace('\r', '');
            }
        }
    }
}

function parseJSON(modeStops, modeData) {
    modeStops.push(new Stop(modeData[0].id));
    modeStops[0].adjacentStops.set(modeData[0].adjStop, new Connection(Number(modeData[0].weight), modeData[0].routes));
    for (let i = 1; i < modeData.length; i++) {
        if (!(modeData[i].id === modeData[i - 1].id)) {
            modeStops.push(new Stop(modeData[i].id));
        }
        if (useAir === true && modeData[i].adjStop.includes('air')) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
        if (useBahn === true && modeData[i].adjStop.includes('bahn')) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
        if (useBus === true && (modeData[i].adjStop.includes('bus') || modeData[i].adjStop.includes('omega'))) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
        if (useRail === true && (modeData[i].adjStop.includes('rail') && !(modeData[i].adjStop.includes('railScar')) && !(modeData[i].adjStop.includes('railLumeva')))) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
        if (useRailLocal === true && (modeData[i].adjStop.includes('railScar') || modeData[i].adjStop.includes('railLumeva'))) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
        if (useSail === true && modeData[i].adjStop.includes('sail')) {
            modeStops[modeStops.length - 1].adjacentStops.set(modeData[i].adjStop, new Connection(Number(modeData[i].weight), modeData[i].routes));
        }
    }
}

function addToAllStops(modeStops) {
    for (let i = 0; i < modeStops.length; i++) {
        allStops.push(modeStops[i]);
    }
}

if (useAir === true) {
    removeAnnoyingStuff(airData);
    parseJSON(airStops, airData);
    addToAllStops(airStops);
}
if (useBahn === true) {
    removeAnnoyingStuff(bahnData);
    parseJSON(bahnStops, bahnData);
    addToAllStops(bahnStops);
}
if (useBus === true) {
    removeAnnoyingStuff(busData);
    parseJSON(busStops, busData);
    addToAllStops(busStops);
    removeAnnoyingStuff(omegaData);
    parseJSON(omegaStops, omegaData);
    addToAllStops(omegaStops);
}
if (useRail === true) {
    removeAnnoyingStuff(railData);
    parseJSON(railStops, railData);
    addToAllStops(railStops);
}
if (useRailLocal === true) {
    removeAnnoyingStuff(railScarData);
    parseJSON(railScarStops, railScarData);
    addToAllStops(railScarStops);
    removeAnnoyingStuff(railLumevaData);
    parseJSON(railLumevaStops, railLumevaData);
    addToAllStops(railLumevaStops);
}
if (useSail === true) {
    removeAnnoyingStuff(sailData);
    parseJSON(sailStops, sailData);
    addToAllStops(sailStops);
}

console.log(allStops);

export { allStops };
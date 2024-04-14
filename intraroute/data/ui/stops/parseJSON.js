import airData from './air.json' with { type: 'json' };
import bahnData from './bahn.json' with { type: 'json' };
import busData from './bus.json' with { type: 'json' };
import omegaData from './omega.json' with { type: 'json' };
import railData from './rail.json' with { type: 'json' };
import railScarData from './railScar.json' with { type: 'json' };
import railLumevaData from './railLumeva.json' with { type: 'json' };
import sailData from './sail.json' with { type: 'json' };

class StopUI {
    routes = [];
    constructor(id, code, city, stopName) {
        this.id = id;
        this.code = code;
        this.city = city;
        this.stopName = stopName;
    }
}

class routesUI {
    constructor(route, meta1, meta2) {
        this.route = route;
        this.meta1 = meta1;
        this.meta2 = meta2;
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

function parseJSON(modeStops, modeData) {
    modeStops.push(new StopUI(modeData[0].id, modeData[0].code, modeData[0].city, modeData[0].stopName));
    modeStops[0].routes.push(new routesUI(modeData[0].route, modeData[0].meta1, modeData[0].meta2));
    for (let i = 1; i < modeData.length; i++) {
        if (!(modeData[i].id === modeData[i - 1].id)) {
            modeStops.push(new StopUI(modeData[i].id, modeData[i].code, modeData[i].city, modeData[i].stopName));
        }
        if (useAir === true && modeData[i].route.includes('air')) {
            modeStops[modeStops.length - 1].routes.push(new routesUI(modeData[i].route, modeData[i].meta1, modeData[i].meta2));
        }
    }
}


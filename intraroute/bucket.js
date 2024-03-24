let bahnSHC = {
    adjacentStops: {
        bahnSHD: {weight: 1, routes: ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']},
        bahnWHO: {weight: 1, routes: ['bahn1Jsouth', 'bahn1JXsouth']},
        bahnWHQ: {weight: 1, routes: ['bahn1Inorth']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnSHD = {
    adjacentStops: {
        bahnSHC: {weight: 1, routes: ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnKNX = {
    adjacentStops: {
        bahnWHO: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
        bahnZQL: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnWHO = {
    adjacentStops: {
        bahnSHC: {weight: 1, routes: ['bahn1Jnorth', 'bahn1JXnorth']},
        bahnKNX: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']},
        bahnWHQ: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth']},
        bahnZQL: {weight: 1, routes: ['bahn1Xsouth', 'bahn1JXsouth']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnWHQ = {
    adjacentStops: {
        bahnSHC: {weight: 1, routes: ['bahn1Isouth']},
        bahnWHO: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnZQA = {
    adjacentStops: {
        bahnZQL: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']},
        bahnZQT: {weight: 1, routes: ['bahnZQccw']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnZQL = {
    adjacentStops: {
        bahnKNX: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
        bahnWHO: {weight: 1, routes: ['bahn1Xnorth', 'bahn1JXnorth']},
        bahnZQA: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']},
        bahnZQT: {weight: 1, routes: ['bahnZQcw']}
    },
    shortestTime: Infinity,
    explored: false
}

let bahnZQT = {
    adjacentStops: {
        bahnZQA: {weight: 1, routes: ['bahnZQcw']},
        bahnZQL: {weight: 1, routes: ['bahnZQccw']}
    },
    shortestTime: Infinity,
    explored: false
}


let stops = {
    bahnSHC: {
        adjacentStops: {
            bahnSHD: {weight: 1, routes: ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']},
            bahnWHO: {weight: 1, routes: ['bahn1Jsouth', 'bahn1JXsouth']},
            bahnWHQ: {weight: 1, routes: ['bahn1Inorth']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnSHD: {
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnKNX: {
        adjacentStops: {
            bahnWHO: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            bahnZQL: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnWHO: {
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Jnorth', 'bahn1JXnorth']},
            bahnKNX: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']},
            bahnWHQ: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth']},
            bahnZQL: {weight: 1, routes: ['bahn1Xsouth', 'bahn1JXsouth']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnWHQ: {
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Isouth']},
            bahnWHO: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnZQA: {
        adjacentStops: {
            bahnZQL: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']},
            bahnZQT: {weight: 1, routes: ['bahnZQccw']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnZQL: {
        adjacentStops: {
            bahnKNX: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            bahnWHO: {weight: 1, routes: ['bahn1Xnorth', 'bahn1JXnorth']},
            bahnZQA: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']},
            bahnZQT: {weight: 1, routes: ['bahnZQcw']}
        },
        shortestTime: Infinity,
        explored: false
    },
    bahnZQT: {
        adjacentStops: {
            bahnZQA: {weight: 1, routes: ['bahnZQcw']},
            bahnZQL: {weight: 1, routes: ['bahnZQccw']}
        },
        shortestTime: Infinity,
        explored: false
    }
}

for (let i = 0; i < Object.keys(stops).length; i++) {
    let stopsArray = Object.keys(stops);
    checkExplored(stopsArray[i]);
}

for (let i = 0; i < Object.keys(stops).length; i++) {
    checkExplored(Object.entries(stops)[i][0]);
}

for (let i = 0; i < Object.keys(currentStop.adjacentStops).length; i++) {
    let adjacentStopWeight = currentStop.adjacentStops[Object.keys(currentStop.adjacentStops)[i]].weight;
    let adjacentStopShortestTime = currentStop.adjacentStops[Object.keys(currentStop.adjacentStops)[i]].shortestTime
    let adjacentStopNewTime = currentStop.shortestTime + adjacentStopWeight;
    if (adjacentStopNewTime < adjacentStopShortestTime) {
        currentStop.adjacentStops[Object.keys(currentStop.adjacentStops)[i]].shortestTime = adjacentStopNewTime;
    }
}

let stops = {
    bahnSHC: {
        id: 'bahnSHC',
        adjacentStops: {
            bahnSHD: {weight: 1, routes: ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']},
            bahnWHO: {weight: 1, routes: ['bahn1Jsouth', 'bahn1JXsouth']},
            bahnWHQ: {weight: 1, routes: ['bahn1Inorth']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnSHD: {
        id: 'bahnSHD',
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnKNX: {
        id: 'bahnKNX',
        adjacentStops: {
            bahnWHO: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            bahnZQL: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnWHO: {
        id: 'bahnWHO',
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Jnorth', 'bahn1JXnorth']},
            bahnKNX: {weight: 1, routes: ['bahn1south', 'bahn1Jsouth']},
            bahnWHQ: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth']},
            bahnZQL: {weight: 1, routes: ['bahn1Xsouth', 'bahn1JXsouth']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnWHQ: {
        id: 'bahnWHQ',
        adjacentStops: {
            bahnSHC: {weight: 1, routes: ['bahn1Isouth']},
            bahnWHO: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnZQA: {
        id: 'bahnZQA',
        adjacentStops: {
            bahnZQL: {weight: 1, routes: ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']},
            bahnZQT: {weight: 1, routes: ['bahnZQccw']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnZQL: {
        id: 'bahnZQL',
        adjacentStops: {
            bahnKNX: {weight: 1, routes: ['bahn1north', 'bahn1Jnorth']},
            bahnWHO: {weight: 1, routes: ['bahn1Xnorth', 'bahn1JXnorth']},
            bahnZQA: {weight: 1, routes: ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']},
            bahnZQT: {weight: 1, routes: ['bahnZQcw']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    },
    bahnZQT: {
        id: 'bahnZQT',
        adjacentStops: {
            bahnZQA: {weight: 1, routes: ['bahnZQcw']},
            bahnZQL: {weight: 1, routes: ['bahnZQccw']}
        },
        shortestTime: Infinity,
        explored: false,
        pathFromStart: undefined
    }
}

let start = stops[7];
let end = stops[1];

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

Object.values(stops).forEach(checkExplored)

console.log(exploredStops);
console.log(unexploredStops);



console.log(start.adjacentStops);

/* loop to repeat:

for currentStop:

---

update shortestTime estimates:

check each adjacent stop

find the value of the weight between the current stop and the adjacent stop
add that value with current stop's shortestTime

if that new value is less than the adjacent stop's shortestTime, update adjacent stop's
shortestTime to the new value

and add the routes and station pair to pathFromStart for the adjacent stop

after this is run for all adjacent stops, continue to next step

---

choose next stop:

check all unexploredStops

find the one with the lowest shortestTime

set it to currentStop

set currentStop.explored to true

run checkExplored on current stop

repeat previous step

*/

for (i = 0; i < currentStop.adjacentStops.length; i++) {
    newTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight
}

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

for (i = 0; i < currentStop.adjacentStops.length; i++) {
    // For every adjacent stop, adds shortestTime of the current stop to weight of the adjacent stop and saves as newTime.
    let newTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight;
    
    // If newTime is greater than the
    if (newTime < eval(currentStop.adjacentStops[i].id).shortestTime) {
        eval(currentStop.adjacentStops[i].id).shortestTime = newTime;
    }
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




let preFinalRoute = [];

for (i = 0; i < path.length; i++) {
    if (!(path[i + 1])) {
        break;
    }
    preFinalRoute[i] = [path[i].id, path[i + 1].id, routesForPathFiltered[i], 1]
}

let finalRoute = [preFinalRoute[0]];

console.log(finalRoute);

for (i = 1; i < preFinalRoute.length; i++) {
    if (preFinalRoute[i] === preFinalRoute[i - 1]) {
        
    }
}



// line 200

let routesForPath = [];

console.log(path[0]);

for (i = 0; i < path.length; i++) {
    console.log('Start of big loop');
    for (let [key, value] of path[i].adjacentStops) {
        console.log('Start of little loop');
        console.log(key);
        console.log(value);
        if (path[i] === end) {
            break;
        }
        console.log(path[i + 1].id);
        if (key === path[i + 1].id) {
            console.log('Match!');
            routesForPath.push(value.routes);
            break;
        }
        console.log('End of little loop');
    }
    console.log(routesForPath);
    console.log('End of big loop');
}

/*

need to filter routesForPath in case of a common route on multiple legs of a journey

check routesForPath[0] and routesForPath[1]
do they have any items in common?

if yes,
create an array of just the common items between routesForPath[0] and routesForPath[1]
save this array to routesForPath[0] and routesForPath[1]

if no,
do nothing

do again with routesforPath[1] and routesForPath[2]

for loop:

compare routesForPath[i] and routesForPath[i + 1]
break when routesForPath[i + 1] doesn't exist

*/

console.log(routesForPath);

function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

console.log(findCommonElements(routesForPath[1], routesForPath[2]));

let routesForPathFiltered = routesForPath;

for (i = 0; i < routesForPath.length; i++) {
    console.log(i);
    console.log(i + 1);
    console.log(routesForPath[i]);
    console.log(routesForPath[i + 1]);
    if (!(routesForPath[i + 1])) {
        console.log('Break condition reached!');
        break;
    }
    let commonRoutes = findCommonElements(routesForPath[i], routesForPath[i + 1]);
    if (commonRoutes.length > 0) {
        routesForPathFiltered[i] = commonRoutes;
        routesForPathFiltered[i + 1] = commonRoutes;
    }
}

console.log(path);
console.log(routesForPathFiltered);

let preFinalRoute = [];

for (i = 0; i < path.length; i++) {
    if (!(path[i + 1])) {
        break;
    }
    preFinalRoute[i] = [path[i].id, path[i + 1].id, routesForPathFiltered[i], 1]
}

console.log(preFinalRoute);
console.log(path[0].id);
console.log(preFinalRoute.indexOf(path[0].id));

let finalRoute = [preFinalRoute[0]];

console.log(finalRoute);
console.log(finalRoute.indexOf(path[0].id));

if (routesForPathFiltered[0] === routesForPathFiltered[1]) {

}




// line 277

let preFinalPath = [];

for (i = 0; i < path.length; i++) {
    if (!(path[i + 1])) {
        break;
    }
    preFinalPath[i] = [path[i].id, path[i + 1].id, routesForPathFiltered[i], 1]
}

console.log(preFinalPath);

let finalPath = preFinalPath;

function removeFromArray(array, removeMe) {
    let newArray = array.filter((value) => value !== removeMe);
    return newArray;
}

/*
finalPath[i][0] = origin stop
finalPath[i][1] = destination stop
finalPath[i][2] = routes
finalPath[i][3] = number of stops
*/
for (i = 0; i < finalPath.length; i++) {
    if (!(finalPath[i + 1])) {
        break;
    }
    if (finalPath[i][2] === finalPath[i + 1][2]) {
        finalPath[i][1] = finalPath[i + 1][1];
        finalPath[i][3] += 1;
        finalPath = removeFromArray(finalPath[i + 1]);
    }
}

console.log(finalPath);

/*

// preFinalRoute[i][3] is the routes for each segment
if (preFinalRoute[i - 1][3] === preFinalRoute[i][3]) {
    let index = finalRoute.findIndex(item => item.includes(path[i].id))
    finalRoute[index][2] += 1;
} else {
    finalRoute.push([path[i].id, path])
}

*/








for (i = 0; i < finalPath.length;) {
    console.log('Start of loop')
    console.log('i is currently: ' + i)
    if (!(finalPath[i + 1])) {
        console.log('Loop broken!')
        break;
    }
    console.log(finalPath[i].routes)
    console.log(finalPath[i + 1].routes)
    console.log(finalPath[i].firstStop + ' ' + finalPath[i].lastStop)
    console.log(finalPath[i + 1].firstStop + ' ' + finalPath[i + 1].lastStop)
    if (finalPath[i].routes === finalPath[i + 1].routes) {
        console.log('If statement true!')
        finalPath[i].lastStop = finalPath[i + 1].lastStop;
        console.log(finalPath[i].lastStop);
        finalPath[i].numOfStops += 1;
        console.log(finalPath[i].numOfStops);
        finalPath = removeFromArray(finalPath, finalPath[i + 1])
        console.log(finalPath);
    } else {
        console.log('If statement false!')
        i += 1;
    }
    console.log('End of loop')
    console.log('i is currently: ' + i)
}

console.log(finalPath);
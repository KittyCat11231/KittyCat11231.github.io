/*

IntraRoute Pathfinding Script
Version Alpha 1.0.0

This script calculates pathfinding between the origin and destination set by the user and returns the best route.

Designed for Intra by Roy Disney Softworks.
Developed by kyle11231 with help from DNAmaster10 & scarycrumb.

*/

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

// stopsMap pairs the string of a stop with its corresponding variable.
const stopsMap = new Map();

// This array will contain every stop.
let allStops = [];

// Creates a new object, bahnKNX, based on the "Stop" class.
let bahnKNX = new Stop('bahnKNX');

/* Sets the map in bahnKNX.adjacentStops to a pair of values: a stop name and a new instance of the "Connection" class
with the weight set to 1 and routes set to an array of routes. */
bahnKNX.adjacentStops.set('bahnWHO', new Connection(1, ['bahn1north', 'bahn1Jnorth']));
bahnKNX.adjacentStops.set('bahnZQL', new Connection(1, ['bahn1south', 'bahn1Jsouth']));

// Pairs the 'bahnKNX' string and bahnKNX variable together for reference.
stopsMap.set('bahnKNX', bahnKNX);

// Adds bahnKNX to the allStops array.
allStops.push(bahnKNX);

function setAdjacentStop(thisStop, adjStopId, weight, routes) {
    thisStop.adjacentStops.set(adjStopId, new Connection(weight, routes));
}

let bahnSHC = new Stop('bahnSHC');
setAdjacentStop(bahnSHC, 'bahnSHD', 1, ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']);
setAdjacentStop(bahnSHC, 'bahnWHO', 1, ['bahn1Jsouth', 'bahn1JXsouth']);
setAdjacentStop(bahnSHC, 'bahnWHQ', 1, ['bahn1Inorth']);
stopsMap.set('bahnSHC', bahnSHC);
allStops.push(bahnSHC);

let bahnSHD = new Stop('bahnSHD');
setAdjacentStop(bahnSHD, 'bahnSHC', 1, ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']);
stopsMap.set('bahnSHD', bahnSHD);
allStops.push(bahnSHD);

let bahnWHO = new Stop('bahnWHO');
setAdjacentStop(bahnWHO, 'bahnKNX', 1, ['bahn1south', 'bahn1Jsouth']);
setAdjacentStop(bahnWHO, 'bahnSHC', 1, ['bahn1Jnorth', 'bahn1JXnorth']);
setAdjacentStop(bahnWHO, 'bahnWHQ', 1, ['bahn1north', 'bahn1Xnorth']);
setAdjacentStop(bahnWHO, 'bahnZQL', 1, ['bahn1Xsouth', 'bahn1JXsouth']);
stopsMap.set('bahnWHO', bahnWHO);
allStops.push(bahnWHO);

let bahnWHQ = new Stop('bahnWHQ');
setAdjacentStop(bahnWHQ, 'bahnSHC', 1, ['bahn1Isouth']);
setAdjacentStop(bahnWHQ, 'bahnWHO', 1, ['bahn1south', 'bahn1Xsouth']);
stopsMap.set('bahnWHQ', bahnWHQ);
allStops.push(bahnWHQ);

let bahnZQA = new Stop('bahnZQA');
setAdjacentStop(bahnZQA, 'bahnZQL', 1, ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']);
setAdjacentStop(bahnZQA, 'bahnZQT', 1, ['bahnZQccw']);
stopsMap.set('bahnZQA', bahnZQA);
allStops.push(bahnZQA);

let bahnZQL = new Stop('bahnZQL');
setAdjacentStop(bahnZQL, 'bahnKNX', 1, ['bahn1north', 'bahn1Jnorth']);
setAdjacentStop(bahnZQL, 'bahnWHO', 1, ['bahn1Xnorth', 'bahn1JXnorth']);
setAdjacentStop(bahnZQL, 'bahnZQA', 1, ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']);
setAdjacentStop(bahnZQL, 'bahnZQT', 1, ['bahnZQcw']);
stopsMap.set('bahnZQL', bahnZQL);
allStops.push(bahnZQL);

let bahnZQT = new Stop('bahnZQT');
setAdjacentStop(bahnZQT, 'bahnZQA', 1, ['bahnZQcw']);
setAdjacentStop(bahnZQT, 'bahnZQL', 1, ['bahnZQccw']);
stopsMap.set('bahnZQT', bahnZQT);
allStops.push(bahnZQT);

// Origin and destination to be decided by the user.

let start;
let end;

let unselected;
stopsMap.set('unselected', unselected);

// When the user clicks the submit button, pathfinding() runs.

let finalPath;

function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

function removeFromArray(array, removeMe) {
    let newArray = array.filter((value) => value !== removeMe);
    return newArray;
}

function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

class pathSegment {
    constructor(firstStop, lastStop, routes, numOfStops) {
        this.firstStop = firstStop;
        this.lastStop = lastStop;
        this.routes = routes;
        this.numOfStops = numOfStops;
    }
}

function pathfinding() {

    // If the start and end are the same or are not selected, none of the rest of this script will run.

    if (start === unselected || end === unselected) {
        alert('You must choose an origin and destination!');
        location.reload();
        return;
    } else if (start === end) {
        alert('You can\'t choose the same stop for your origin and destination, you silly goose!');
        location.reload();
        return;
    }

    start.shortestTime = 0;
    start.explored = true;

    let currentStop = start;

    let exploredStops = [];
    let unexploredStops = [];

    // Puts all explored and unexplored stops in the correct arrays.

    for (let i = 0; i < allStops.length; i++) {
        if (allStops[i].explored === true) {
            exploredStops.push(allStops[i]);
        } else {
            unexploredStops.push(allStops[i]);
        }
    }

    // dijkstra's algorithm loop

    while (unexploredStops.length > 0) {
        console.log('start of dijkstra loop pass');
        console.log('current stop:');
        console.log(currentStop.id);

        for (let [key, value] of currentStop.adjacentStops) {
            let adjStop = stopsMap.get(key);
            let adjStopNewTime = currentStop.shortestTime + value.weight;

            console.log('evaluating adjacent stop:');
            console.log(adjStop.id);

            let routesLastLeg = currentStop.adjacentStops.get(adjStop.id).routes;
            console.log('routesLastLeg:');
            console.log(routesLastLeg);
            let pathLastLeg = new pathSegment(currentStop, adjStop, routesLastLeg, 1);
            console.log('pathLastLeg:');
            console.log(pathLastLeg);
            let adjStopPath = [pathLastLeg];

            console.log('adjStopPath:');
            console.log(adjStopPath);

            let transferNeeded;

            function buildPathToStop() {

                for (let i = (currentStop.pathToStop.length - 1); i >= 0; i--) {
                    console.log(`currentStop.pathToStop[${i}]:`);
                    console.log(currentStop.pathToStop[i]);
                    adjStopPath.unshift(currentStop.pathToStop[i])
                    console.log('adjStopPath after unshift:');
                    console.log(adjStopPath);
                }

                console.log('adjStopPath[adjStopPath.length - 1]:');
                console.log(adjStopPath[adjStopPath.length - 1]);
                console.log('adjStopPath[adjStopPath.length - 2]:');
                console.log(adjStopPath[adjStopPath.length - 2]);

                let commonRoutes = findCommonElements(adjStopPath[adjStopPath.length - 1].routes, adjStopPath[adjStopPath.length - 2].routes);

                console.log('commonRoutes:');
                console.log(commonRoutes)

                if (commonRoutes.length > 0) {
                    adjStopPath[adjStopPath.length - 1].routes = commonRoutes;
                    adjStopPath[adjStopPath.length - 2].routes = commonRoutes;
                    transferNeeded = false;
                } else {
                    transferNeeded = true;
                }

            }

            if (currentStop.pathToStop !== false) {
                buildPathToStop();
            } else {
                transferNeeded = false;
            }

            if (transferNeeded = true) {
                adjStopNewTime += 10;
            }

            function filterPathToStop() {
                let changesMade = false;

                while (true) {

                    for (let i = 0; i < (adjStop.pathToStop.length - 1); i++) {
                        if (!(deepEqual(adjStop.pathToStop[i].routes, adjStop.pathToStop[i + 1].routes))) {
                            changesMade = true;
                            console.log(`adjStop.pathToStop[${i}].routes`);
                            console.log(adjStop.pathToStop[i].routes);
                            console.log(`adjStop.pathToStop[${i + 1}].routes`);
                            console.log(adjStop.pathToStop[i + 1].routes);
                            adjStop.pathToStop[i].routes = findCommonElements(adjStop.pathToStop[i].routes, adjStop.pathToStop[i + 1].routes);
                            adjStop.pathToStop[i + 1].routes = findCommonElements(adjStop.pathToStop[i].routes, adjStop.pathToStop[i + 1].routes);
                        } else {
                            changesMade = false;
                        }
                    }

                    if (changesMade === false) {
                        break;
                    }

                }
            }

            if (adjStopNewTime < adjStop.shortestTime) {
                adjStop.shortestTime = adjStopNewTime;
                adjStop.previousStop = currentStop;
                adjStop.pathToStop = adjStopPath;
                filterPathToStop();
            }
        }

        // Puts unexplored stops with a non-infinity shortest time in their own array.

        let unexploredNonInfinity = [];

        for (let i = 0; i < unexploredStops.length; i++) {
            if (unexploredStops[i].shortestTime !== Infinity) {
                unexploredNonInfinity.push(unexploredStops[i]);
            }
        }

        /*
        
        Creates an array with the shortest times of all unexplored stops (except infinity time ones),
        then finds the smallest number.

        */

        let unexploredShortestTimes = [];

        for (let i = 0; i < unexploredNonInfinity.length; i++) {
            unexploredShortestTimes.push(unexploredNonInfinity[i].shortestTime)
        }

        let unexploredShortestTimeMin = Math.min(...unexploredShortestTimes);

        /*
        
        Checks all unexplored stops (except infinity time ones). Once it finds a stop matching the shortest
        time found by the code above, it sets that to the current stop.

        */

        for (let i = 0; i < unexploredNonInfinity.length; i++) {
            if (unexploredNonInfinity[i].shortestTime === unexploredShortestTimeMin) {
                currentStop = unexploredNonInfinity[i];
                break;
            }
        }

        // Sets the current stop as explored and edits the corresponding arrays accordingly.

        currentStop.explored = true;
        exploredStops.push(currentStop);

        unexploredStops = removeFromArray(unexploredStops, currentStop);

        /*
        
        If the new current stop is the destination set by the user, great! We just found the shortest time to the
        destination and logged the "previous stop" for every stop along the way.

        Otherwise, the loop continues again with the new current stop.
        
        */

        if (currentStop === end) {
            break;
        }

        console.log('end of dijkstra loop pass');
    }

    // Creates a finalPath array, with pathSegments with the same routes condensed into a single object.

    finalPath = end.pathToStop;

    // Iterates through every pathSegment.
    for (let i = 0; i < (finalPath.length - 1);) {
        // If the current pathSegment has the same routes as the next pathSegment, combines them together.
        if (deepEqual(finalPath[i].routes, finalPath[i + 1].routes)) {
            finalPath[i].lastStop = finalPath[i + 1].lastStop;
            finalPath[i].numOfStops += 1;
            finalPath = removeFromArray(finalPath, finalPath[i + 1])
        } else {
            i += 1;
            // i only increases if the if statement is false, so the loop will always double check its work.
        }
    }

    for (let i = 0; i < finalPath.length; i++) {
        finalPath[i].firstStop = finalPath[i].firstStop.id;
        finalPath[i].lastStop = finalPath[i].lastStop.id;
    }
}

// Sets the user's origin and destination and runs pathfinding() after the user hits the submit button.

document.getElementById("submit-button").addEventListener('click', function() {
    start = stopsMap.get(document.getElementById("origin-select").value);
    end = stopsMap.get(document.getElementById("destination-select").value);
    pathfinding();
    console.log(finalPath);
})

export { finalPath };
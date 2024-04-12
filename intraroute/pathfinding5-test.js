/*

IntraRoute Pathfinding Script
Version Alpha InDev

This script calculates pathfinding between the origin and destination set by the user and returns the best route.

Designed for Intra by Roy Disney Softworks.
Developed by kyle11231 with help from DNAmaster10 & scarycrumb.

*/

import { allStops } from './data/pathfinding/parseJSON-test.js'

let stopsMap = new Map();

for (let i = 0; i < allStops.length; i++) {
    window[allStops[i].id] = allStops[i];
    stopsMap.set(allStops[i].id, allStops[i]);
}

class pathSegment {
    constructor(firstStop, lastStop, routes, numOfStops) {
        this.firstStop = firstStop;
        this.lastStop = lastStop;
        this.routes = routes;
        this.numOfStops = numOfStops;
    }
}

// Origin and destination to be decided by the user.

let start;
let end;

let unselected;
stopsMap.set('unselected', unselected);

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

function filterRoutes(pathArray) {

    let commonRoutesForFilter = findCommonElements(pathArray[pathArray.length - 1].routes, pathArray[pathArray.length - 2].routes);

    if (!(commonRoutesForFilter)) {
        return;
    }

    for (let i = (pathArray.length - 1); i >= 0; i--) {
        let commonRoutes3 = findCommonElements(commonRoutesForFilter, pathArray[i].routes);

        if (commonRoutes3.length > 0) {
            pathArray[i].routes = commonRoutesForFilter
        } else {
            break;
        }
    }
}

// When the user clicks the submit button, pathfinding() runs.

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

let currentStopAtStartOfLoop = currentStop;

        console.log(currentStop.id);

        // Iterates through every adjacent stop.

        for (let [key, value] of currentStop.adjacentStops) {
            let adjStop = stopsMap.get(key);
            let adjStopNewTime = currentStop.shortestTime + value.weight;
            if (!(adjStop)) {
                debugger;
            }
            let routesLastLeg = currentStop.adjacentStops.get(adjStop.id).routes;
            let pathLastLeg = new pathSegment(currentStop.id, adjStop.id, routesLastLeg, 1);
            let adjStopPath = [pathLastLeg];

            let transferNeeded;

            function buildPathToStop() {

                let pathToCurrentStop = JSON.parse(JSON.stringify(currentStop.pathToStop));

                for (let i = (pathToCurrentStop.length - 1); i >= 0; i--) {
                    adjStopPath.unshift(pathToCurrentStop[i]);
                }

                let commonRoutes = findCommonElements(adjStopPath[adjStopPath.length - 1].routes, adjStopPath[adjStopPath.length - 2].routes);

                if (commonRoutes.length > 0) {
                    filterRoutes(adjStopPath);
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

            if (transferNeeded === true) {
                adjStopNewTime += 10;
            }

            if (adjStopNewTime < adjStop.shortestTime) {
                adjStop.shortestTime = adjStopNewTime;
                adjStop.previousStop = currentStop;
                adjStop.pathToStop = adjStopPath;
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
            } else {
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

if (currentStop.id === currentStopAtStartOfLoop.id) {
console.log('ERROR: New current stop assignment failed.');
console.log('currentStop:');
console.log(currentStop);
alert('Whoopsie! That wasn't supposed to happen!');
break;
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
}

// Sets the user's origin and destination and runs pathfinding() after the user hits the submit button.

document.getElementById("submit-button").addEventListener('click', function() {
    start = railASN;
    end = railSSR;
    pathfinding();
    console.log('start:');
    console.log(start.id);
    console.log('end');
    console.log(end.id);
    console.log('path:');
    console.log(finalPath);
})

export { finalPath };
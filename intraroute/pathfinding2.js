/*

IntraRoute Pathfinding Script
Development Version

This script calculates pathfinding between the origin and destination set by the user and returns the best route.

Designed for Intra by Roy Disney Softworks.
Developed by kyle11231 with help from DNAmaster10 & scarycrumb.

*/

class Stop {
    adjacentStops = new Map();
    shortestTime = Infinity;
    explored = false;
    previousStop;

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

function pathfinding() {

    // If the start and end are the same or are not selected, none of the rest of this script will run.

    if (start === unselected || end === unselected) {
        alert('You must choose an origin and destination!');
        location.reload();
    } else if (start === end) {
        alert('You can\'t choose the same stop for your origin and destination, you silly goose!');
        location.reload();
    } else {

        start.shortestTime = 0;
        start.explored = true;

        let currentStop = start;
        let adjacentToCurrentStop = Array.from(currentStop.adjacentStops.keys());

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

        /*
        
        Everything inside this while loop is Dijkstra's algorithm. The loop will break if there are no more unexplored
        stops or if the current explored stop is the destination.

        */

        while (unexploredStops.length > 0) {

            /*
            
            This for loop checks every adjacent stop to the current stop and calculates the time between the current
            stop and the adjacent stop.
            
            If this time is shorter than the existing shortest time for that stop, it becomes the new shortest time, and
            the current stop is set as that stop's "previous stop" for use later in pathfinding.

            The default shortest time for all stops except the start is infinity.

            */

            for (let [key, value] of currentStop.adjacentStops) {
                let adjStop = stopsMap.get(key);
                let adjStopNewTime = currentStop.shortestTime + value.weight;
                if (adjStopNewTime < adjStop.shortestTime) {
                    adjStop.shortestTime = adjStopNewTime
                    adjStop.previousStop = currentStop;
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

            function removeFromUnexploredStops(stop) {
                let newArray = unexploredStops.filter((value) => value !== stop);
                return newArray;
            }

            unexploredStops = removeFromUnexploredStops(currentStop);

            /*
            
            If the new current stop is the destination set by the user, great! We just found the shortest time to the
            destination and logged the "previous stop" for every stop along the way.

            Otherwise, the loop continues again with the new current stop.
            
            */

            if (currentStop === end) {
                break;
            }

        }

        /*
        
        Works backwards with the "previousStop" values of each stop starting at the end until it reaches the start, putting
        together a "path" array of all stops on the fastest route from the origin to the destination.

        */

        let path = [currentStop];

        while (path[0].previousStop) {
            path.unshift(path[0].previousStop);
        }

        /* 
        
        For each stop in the path array, checks all adjacent stops until it finds the one matching the next stop in the
        path array. Then, pushes the routes from the current stop it's looking at to that adjacent stop into a corresponding
        index in a new array, routesForPath.
        
        */

        let routesForPath = [];

        // Big loop loops through every stop in the "path" array.
        for (let i = 0; i < path.length; i++) {
            // Small loop checks every adjacent stop of the current "path" stop.
            for (let [key, value] of path[i].adjacentStops) {
                if (path[i] === end) {
                    break;
                }
                // If the adjacent stop of the current stop in "path" is the same as the next stop in "path".
                if (key === path[i + 1].id) {
                    routesForPath.push(value.routes);
                    break;
                }
            }
        }

        function findCommonElements(arr1, arr2) {
            return arr1.filter(element => arr2.includes(element));
        }

        // Filters the routesForPath array. If two adjacent legs of the trip have routes in common, removes any other routes.

        let routesForPathFiltered = routesForPath;

        for (let i = 0; i < routesForPath.length; i++) {
            if (!(routesForPath[i + 1])) {
                break;
            }
            let commonRoutes = findCommonElements(routesForPath[i], routesForPath[i + 1]);
            if (commonRoutes.length > 0) {
                routesForPathFiltered[i] = commonRoutes;
                routesForPathFiltered[i + 1] = commonRoutes;
            }
        }

        // Runs the filtered array through another filter for good measure.

        for (let j = 0; j < 30; j++) {
            let routesForPathFilteredCheck = routesForPathFiltered;
            for (let i = 0; i < routesForPathFilteredCheck.length; i++) {
                if (!(routesForPathFilteredCheck[i + 1])) {
                    break;
                }
                if (findCommonElements(routesForPathFilteredCheck[i], routesForPathFilteredCheck[i + 1]).length > 0) {
                    routesForPathFilteredCheck[i] = findCommonElements(routesForPathFilteredCheck[i], routesForPathFilteredCheck[i + 1]);
                    routesForPathFilteredCheck[i + 1] = findCommonElements(routesForPathFilteredCheck[i], routesForPathFilteredCheck[i + 1]);
                }
                routesForPathFiltered = routesForPathFilteredCheck;
            }
            if (routesForPathFilteredCheck === routesForPathFiltered) {
                break;
            }
        }

        // Creates a preFinalPath array with pathSegment objects for the segment between every two stops.

        class pathSegment {
            constructor(firstStop, lastStop, routes, numOfStops) {
                this.firstStop = firstStop;
                this.lastStop = lastStop;
                this.routes = routes;
                this.numOfStops = numOfStops;
            }
        }

        let preFinalPath = [];

        for (let i = 0; i < path.length; i++) {
            if (!(path[i + 1])) {
                break;
            }
            preFinalPath[i] = new pathSegment(path[i].id, path[i + 1].id, routesForPathFiltered[i], 1)
        }

        // Creates a finalPath array, with pathSegments with the same routes condensed into a single object.

        finalPath = preFinalPath;

        function removeFromArray(array, removeMe) {
            let newArray = array.filter((value) => value !== removeMe);
            return newArray;
        }

        function deepEqual(a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
        }

        // Iterates through every pathSegment.
        for (let i = 0; i < finalPath.length;) {
            // Breaks the loop when at the end of the path.
            if (!(finalPath[i + 1])) {
                break;
            }
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

}

// Sets the user's origin and destination and runs pathfinding() after the user hits the submit button.

document.getElementById("submit-button").addEventListener('click', function() {
    start = stopsMap.get(document.getElementById("origin-select").value);
    end = stopsMap.get(document.getElementById("destination-select").value);
    pathfinding();
})

export { finalPath };
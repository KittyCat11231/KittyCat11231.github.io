// Routes, each route is listed separately per direction.

const bahn1north = {
    mode: 'bahn',
    stops: ['bahnZQA', 'bahnZQL', 'bahnKNX', 'bahnWHO', 'bahnWHQ'],
    id: 'bahn1north',
  }
const bahn1south = {
    mode: 'bahn',
    stops: ['bahnWHQ', 'bahnWHO', 'bahnKNX', 'bahnZQL', 'bahnZQA'],
    id: 'bahn1south',
  }
const bahn1Xnorth = {
    mode: 'bahn',
    stops: ['bahnZQA', 'bahnZQL', 'bahnWHO', 'bahnWHQ'],
    id: 'bahn1Xnorth',
  }
const bahn1Xsouth = {
    mode: 'bahn',
    stops: ['bahnWHQ', 'bahnWHO', 'bahnZQL', 'bahnZQA'],
    id: 'bahn1Xsouth',
  }
const bahn1Inorth = {
    mode: 'bahn',
    stops: ['bahnSHD', 'bahnSHC', 'bahnWHQ'],
    id: 'bahn1Inorth',
  }
const bahn1Isouth = {
    mode: 'bahn',
    stops: ['bahnWHQ', 'bahnSHC', 'bahnSHD'],
    id: 'bahn1Isouth',
  }
const bahn1Jnorth = {
    mode: 'bahn',
    stops: ['bahnZQA', 'bahnZQL', 'bahnKNX', 'bahnWHO', 'bahnSHC', 'bahnSHD'],
    id: 'bahn1Jnorth',
  }
const bahn1Jsouth = {
    mode: 'bahn',
    stops: ['bahnSHD', 'bahnSHC', 'bahnWHO', 'bahnKNX', 'bahnZQL', 'bahnZQA'],
    id: 'bahn1Jsouth',
  }
const bahn1JXnorth = {
    mode: 'bahn',
    stops: ['bahnZQA', 'bahnZQL', 'bahnWHO', 'bahnSHC', 'bahnSHD'],
    id: 'bahn1JXnorth',
  }
const bahn1JXsouth = {
    mode: 'bahn',
    stops: ['bahnSHD', 'bahnSHC', 'bahnWHO', 'bahnZQL', 'bahnZQA'],
    id: 'bahn1JXsouth',
  }
const bahnZQ1cw = {
      mode: 'bahn',
      stops: ['bahnZQA', 'bahnZQL', 'bahnZQT'],
      id: 'bahnZQ1cw',
  }
  const bahnZQ1ccw = {
    mode: 'bahn',
    stops: ['bahnZQT', 'bahnZQL', 'bahnZQA'],
    id: 'bahnZQ1ccw',
}
const bahnZQ2cw = {
    mode: 'bahn',
    stops: ['bahnZQT', 'bahnZQA'],
    id: 'bahnZQ2cw',
}
const bahnZQ2ccw = {
      mode: 'bahn',
      stops: ['bahnZQA', 'bahnZQT'],
      id: 'bahnZQ2ccw',
  }

// Stops, each route is listed separately per direction

const bahnKNX = [
    {varName: bahn1north, strName: 'bahn1north'}, // index 0
    {varName: bahn1south, strName: 'bahn1south'}, // index 1
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 2
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'} //index 3
];
const bahnSHC = [
    {varName: bahn1Inorth, strName: 'bahn1Inorth'}, // index 0
    {varName: bahn1Isouth, strName: 'bahn1Isouth'}, // index 1
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 2
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'}, // index 3
    {varName: bahn1JXnorth, strName: 'bahn1JXnorth'}, // index 4
    {varName: bahn1JXsouth, strName: 'bahn1JXsouth'} // index 5
];
const bahnSHD = [
    {varName: bahn1Inorth, strName: 'bahn1Inorth'}, // index 0
    {varName: bahn1Isouth, strName: 'bahn1Isouth'}, // index 1
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 2
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'}, // index 3
    {varName: bahn1JXnorth, strName: 'bahn1JXnorth'}, // index 4
    {varName: bahn1JXsouth, strName: 'bahn1JXsouth'} // index 5
];
const bahnWHO = [
    {varName: bahn1north, strName: 'bahn1north'}, // index 0
    {varName: bahn1south, strName: 'bahn1south'}, // index 1
    {varName: bahn1Xnorth, strName: 'bahn1Xnorth'}, // index 2
    {varName: bahn1Xsouth, strName: 'bahn1Xsouth'}, // index 3
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 4
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'}, // index 5
    {varName: bahn1JXnorth, strName: 'bahn1JXnorth'}, // index 6
    {varName: bahn1JXsouth, strName: 'bahn1JXsouth'} // index 7
];
const bahnWHQ = [
    {varName: bahn1north, strName: 'bahn1north'}, // index 0
    {varName: bahn1south, strName: 'bahn1south'}, // index 1
    {varName: bahn1Xnorth, strName: 'bahn1Xnorth'}, // index 2
    {varName: bahn1Xsouth, strName: 'bahn1Xsouth'}, // index 3
    {varName: bahn1Inorth, strName: 'bahn1Inorth'}, // index 4
    {varName: bahn1Isouth, strName: 'bahn1Isouth'} // index 5
];
const bahnZQA = [
    {varName: bahn1north, strName: 'bahn1north'}, // index 0
    {varName: bahn1south, strName: 'bahn1south'}, // index 1
    {varName: bahn1Xnorth, strName: 'bahn1Xnorth'}, // index 2
    {varName: bahn1Xsouth, strName: 'bahn1Xsouth'}, // index 3
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 4
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'}, // index 5
    {varName: bahn1JXnorth, strName: 'bahn1JXnorth'}, // index 6
    {varName: bahn1JXsouth, strName: 'bahn1JXsouth'}, // index 7
    {varName: bahnZQ1cw, strName: 'bahnZQ1cw'}, // index 8
    {varName: bahnZQ1ccw, strName: 'bahnZQ1ccw'}, // index 9
    {varName: bahnZQ2cw, strName: 'bahnZQ2cw'}, // index 10
    {varName: bahnZQ2ccw, strName: 'bahnZQ2ccw'} // index 11
];
const bahnZQL = [
    {varName: bahn1north, strName: 'bahn1north'}, // index 0
    {varName: bahn1south, strName: 'bahn1south'}, // index 1
    {varName: bahn1Xnorth, strName: 'bahn1Xnorth'}, // index 2
    {varName: bahn1Xsouth, strName: 'bahn1Xsouth'}, // index 3
    {varName: bahn1Jnorth, strName: 'bahn1Jnorth'}, // index 4
    {varName: bahn1Jsouth, strName: 'bahn1Jsouth'}, // index 5
    {varName: bahn1JXnorth, strName: 'bahn1JXnorth'}, // index 6
    {varName: bahn1JXsouth, strName: 'bahn1JXsouth'}, // index 7
    {varName: bahnZQ1cw, strName: 'bahnZQ1cw'}, // index 8
    {varName: bahnZQ1ccw, strName: 'bahnZQ1ccw'} // index 9
];
const bahnZQT = [
    {varName: bahnZQ1cw, strName: 'bahnZQ1cw'}, // index 0
    {varName: bahnZQ1ccw, strName: 'bahnZQ1ccw'}, // index 1
    {varName: bahnZQ2cw, strName: 'bahnZQ2cw'}, // index 0
    {varName: bahnZQ2ccw, strName: 'bahnZQ2ccw'} // index 1
];

function getStrName(stop, num) {
    let funcStrName = stop[num].strName;
    return funcStrName;
}

function getVarName(stop, num) {
    let funcVarName = stop[num].varName;
    return funcVarName;
}

// listAllRoutes returns an array with every route at a given stop.

function listAllRoutes(stop) {
    let route1 = getVarName(stop, 0);
    let allRoutes = [route1];
    if (stop.length > 1) {
        let route2 = getVarName(stop, 1);
        allRoutes.push(route2);
    }
    if (stop.length > 2) {
        let route3 = getVarName(stop, 2);
        allRoutes.push(route3);
    }
    if (stop.length > 3) {
        let route4 = getVarName(stop, 3);
        allRoutes.push(route4);
    }
    if (stop.length > 4) {
        let route5 = getVarName(stop, 4);
        allRoutes.push(route5);
    }
    if (stop.length > 5) {
        let route6 = getVarName(stop, 5);
        allRoutes.push(route6);
    }
    if (stop.length > 6) {
        let route7 = getVarName(stop, 6);
        allRoutes.push(route7);
    }
    if (stop.length > 7) {
        let route8 = getVarName(stop, 7);
        allRoutes.push(route8);
    }
    if (stop.length > 8) {
        let route9 = getVarName(stop, 8);
        allRoutes.push(route9);
    }
    if (stop.length > 9) {
        let route10 = getVarName(stop, 9);
        allRoutes.push(route10);
    }
    return allRoutes;
}

// Origin and destination to be set by the user.

let originVar = bahnZQT;
let originStr = 'bahnZQT';
let destinationVar = bahnWHQ;
let destinationStr = 'bahnWHQ';

// filteredArray returns an array with only the common elements between two given arrays.

// directRoutes uses this function to return an array with common stops of the origin and destination.

function filteredArray(array1, array2) {
    const filtered = array1.filter(value => array2.includes(value));
    return filtered
}

let directRoutes = filteredArray(listAllRoutes(originVar), listAllRoutes(destinationVar));

// checkStopIndexInRoute checks the index of a stop within the "stops" array of the object of a route.

function checkStopIndexInRoute(route, stop) {
    let indexNum = route.stops.findIndex(item => item === stop);
    return indexNum;
}

/*

checkRouteDirection uses checkStopIndexInRoute to find the index of the origin and destination on a given route,
then checks if the index of the destination is larger than the index of the destination.

If the destination index is larger than the origin index it returns a value of true.
Otherwise it returns a value of false.

Since each route is listed separately per direction, directRoutes will contain routes in the wrong direction.
If a route is the wrong direction, the value returned by this function will be false, allowing it to be
filtered out.

*/

function checkRouteDirection(route) {
    let originIndex = checkStopIndexInRoute(route, originStr);
    let destinationIndex = checkStopIndexInRoute(route, destinationStr);
    let difference = destinationIndex - originIndex;
    let correctDirection;
    if (difference > 0) {
        correctDirection = true;
    } else {
        correctDirection = false;
    }
    return correctDirection;
}

if (directRoutes.length > 0) {
    
    /*
    ----------------
    Only executed if there are one or more direct routes between origin and destination.
    ----------------
    */

    
    // getDirectRoutesStrNames returns an array with the string names of stops given an array of their variable names.

    // directRoutesStrNames uses this function to replace the variable names in directRoutes with corresponding strings.

    function getDirectRoutesStrNames() {
        let strNames = [directRoutes[0].id];
        if (directRoutes.length > 1) {
            strNames.push(directRoutes[1].id);
        }
        if (directRoutes.length > 2) {
            strNames.push(directRoutes[2].id);
        }
        if (directRoutes.length > 3) {
            strNames.push(directRoutes[3].id);
        }
        if (directRoutes.length > 4) {
            strNames.push(directRoutes[4].id);
        }
        if (directRoutes.length > 5) {
            strNames.push(directRoutes[5].id);
        }
        if (directRoutes.length > 6) {
            strNames.push(directRoutes[6].id);
        }
        if (directRoutes.length > 7) {
            strNames.push(directRoutes[7].id);
        }
        if (directRoutes.length > 8) {
            strNames.push(directRoutes[8].id);
        }
        if (directRoutes.length > 9) {
            strNames.push(directRoutes[9].id);
        }
        return strNames
    }

    let directRoutesStrNames = getDirectRoutesStrNames();

    /*

    filterDirectRoutesByDirection uses checkRouteDirection to return an array of only the routes in the correct
    direction.

    This array is saved as filteredDirectRoutes.

    */

    function filterDirectRoutesByDirection() {
        let directionalDirectRoutes = [];
        let route1correct = checkRouteDirection(directRoutes[0]);
        if (route1correct) {
            directionalDirectRoutes.push(directRoutes[0]);
        }
        if (directRoutes.length > 1) {
            let route2correct = checkRouteDirection(directRoutes[1]);
            if (route2correct) {
                directionalDirectRoutes.push(directRoutes[1]);
            }
        }
        if (directRoutes.length > 2) {
            let route3correct = checkRouteDirection(directRoutes[2]);
            if (route3correct) {
                directionalDirectRoutes.push(directRoutes[2]);
            }
        }
        if (directRoutes.length > 3) {
            let route4correct = checkRouteDirection(directRoutes[3]);
            if (route4correct) {
                directionalDirectRoutes.push(directRoutes[3]);
            }
        }
        if (directRoutes.length > 4) {
            let route5correct = checkRouteDirection(directRoutes[4]);
            if (route5correct) {
                directionalDirectRoutes.push(directRoutes[4]);
            }
        }
        if (directRoutes.length > 5) {
            let route6correct = checkRouteDirection(directRoutes[5]);
            if (route6correct) {
                directionalDirectRoutes.push(directRoutes[5]);
            }
        }
        if (directRoutes.length > 6) {
            let route7correct = checkRouteDirection(directRoutes[6]);
            if (route7correct) {
                directionalDirectRoutes.push(directRoutes[6]);
            }
        }
        if (directRoutes.length > 7) {
            let route8correct = checkRouteDirection(directRoutes[7]);
            if (route8correct) {
                directionalDirectRoutes.push(directRoutes[7]);
            }
        }
        if (directRoutes.length > 8) {
            let route9correct = checkRouteDirection(directRoutes[8]);
            if (route9correct) {
                directionalDirectRoutes.push(directRoutes[8]);
            }
        }
        if (directRoutes.length > 9) {
            let route10correct = checkRouteDirection(directRoutes[9]);
            if (route10correct) {
                directionalDirectRoutes.push(directRoutes[9]);
            }
        }
        return directionalDirectRoutes;
    }

    let filteredDirectRoutes = filterDirectRoutesByDirection();

    // This function converts filteredDirectRoutes into an array with strings instead of variable names.
    // The new array is saved as filteredDirectRoutesStrNames.

    function getFilteredDirectRoutesStrNames() {
        let strNames = [filteredDirectRoutes[0].id];
        if (filteredDirectRoutes.length > 1) {
            strNames.push(filteredDirectRoutes[1].id);
        }
        if (filteredDirectRoutes.length > 2) {
            strNames.push(filteredDirectRoutes[2].id);
        }
        if (filteredDirectRoutes.length > 3) {
            strNames.push(filteredDirectRoutes[3].id);
        }
        if (filteredDirectRoutes.length > 4) {
            strNames.push(filteredDirectRoutes[4].id);
        }
        if (filteredDirectRoutes.length > 5) {
            strNames.push(filteredDirectRoutes[5].id);
        }
        if (filteredDirectRoutes.length > 6) {
            strNames.push(filteredDirectRoutes[6].id);
        }
        if (filteredDirectRoutes.length > 7) {
            strNames.push(filteredDirectRoutes[7].id);
        }
        if (filteredDirectRoutes.length > 8) {
            strNames.push(filteredDirectRoutes[8].id);
        }
        if (filteredDirectRoutes.length > 9) {
            strNames.push(filteredDirectRoutes[9].id);
        }
        return strNames
    }

    let filteredDirectRoutesStrNames = getFilteredDirectRoutesStrNames();

    /*

    findFastestDirectRoutes checks uses checkStopIndexInRoute to check the index of the origin and destination
    of each route in filteredDirectRoutes, and returns an array with the route or routes with the smallest
    difference between the origin and destination index values (aka: the route with the least stops).

    This array is saved as fastestDirectRoutes.

    */

    // NOTE TO SELF: INCOMPLETE - FINISH ASAP

    function logRouteStopCounts(array, stop1, stop2) {
        let routeOutput = [];
        function addRouteWithStopCount(indexNum) {
            let originIndex = checkStopIndexInRoute(array[indexNum], stop1);
            let destinationIndex = checkStopIndexInRoute(array[indexNum], stop2);
            let count = destinationIndex - originIndex;
            routeOutput.push({route: array[indexNum], stopCount: count});
        }
        addRouteWithStopCount(0);
        if (array.length > 1) {
            addRouteWithStopCount(1);
        }
        if (array.length > 2) {
            addRouteWithStopCount(2);
        }
        if (array.length > 3) {
            addRouteWithStopCount(3);
        }
        if (array.length > 4) {
            addRouteWithStopCount(4);
        }
        if (array.length > 5) {
            addRouteWithStopCount(5);
        }
        if (array.length > 6) {
            addRouteWithStopCount(6);
        }
        if (array.length > 7) {
            addRouteWithStopCount(7);
        }
        if (array.length > 8) {
            addRouteWithStopCount(8);
        }
        if (array.length > 9) {
            addRouteWithStopCount(9);
        }
        return routeOutput;
    }

    let filteredDirectRoutesWithStopCounts = logRouteStopCounts(filteredDirectRoutes, originStr, destinationStr);

    function findFastestRoutes(array) {
        let routeOutput = [];
        
    }

    let fastestDirectRoute = findFastestRoutes(filteredDirectRoutesWithStopCounts);

    // Console logs to show output.

    console.log('Origin: ' + originStr);

    console.log('Destination: ' + destinationStr);

    console.log('directRoutes');
    console.log(directRoutes);

    console.log('filteredDirectRoutes');
    console.log(filteredDirectRoutes);

    console.log('fastestDirectRoutes');
    console.log(fastestDirectRoutes);

} else {

    /*
    ----------------
    Only executed if there are zero direct routes between origin and destination.
    ----------------
    */

    
    // Console logs to show output.

    console.log('Origin: ' + originStr);

    console.log('Destination: ' + destinationStr);

    console.log('No direct routes found.');

    /*

    What to do next:

    Check every route stopping at origin.
    Log every stop on every route in an array with the routes that stop there..

    Check every route stopping at destination.
    Log every stop on every route in an array with the routes that stop there.

    Check for matches.

    If there is a stop on a route from origin and a route from destination, log it in a
    new array with the stop and routes together in an object.

    This is the transfer point.

    Might have to move some functions outside the previous "if" block.

    */
}

let testOrigin = document.getElementById('origin-select').value;
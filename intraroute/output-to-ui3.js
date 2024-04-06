import { finalPath } from "./pathfinding4.js";

const stopsMap = new Map();
const routesMap = new Map();

// I might switch to classes in the future but for now I think normal objects have better readability.

const bahnKNX = {
    id: 'bahnKNX',
    mode: 'bahn',
    city: 'Knoxford',
    stopName: null,
    code: 'KNX',
    routeMetadata: new Map()
}

bahnKNX.routeMetadata.set('bahn1north', ['Track 1']);
bahnKNX.routeMetadata.set('bahn1south', ['Track 2']);
bahnKNX.routeMetadata.set('bahn1Jnorth', ['Track 1']);
bahnKNX.routeMetadata.set('bahn1Jsouth', ['Track 2']);

stopsMap.set('bahnKNX', bahnKNX);

const bahnSHC = {
    id: 'bahnSHC',
    mode: 'bahn',
    city: 'Schillerton',
    stopName: 'Cowling Street',
    code: 'SHC',
    routeMetadata: new Map()
}

bahnSHC.routeMetadata.set('bahn1Inorth', ['Track 1']);
bahnSHC.routeMetadata.set('bahn1Isouth', ['Track 2']);
bahnSHC.routeMetadata.set('bahn1Jnorth', ['Track 2']);
bahnSHC.routeMetadata.set('bahn1Jsouth', ['Track 1']);
bahnSHC.routeMetadata.set('bahn1JXnorth', ['Track 2']);
bahnSHC.routeMetadata.set('bahn1JXsouth', ['Track 1']);

stopsMap.set('bahnSHC', bahnSHC);

const bahnSHD = {
    id: 'bahnSHD',
    mode: 'bahn',
    city: 'Schillerton',
    stopName: 'Division Street Terminal',
    code: 'SHD',
    routeMetadata: new Map()
}

bahnSHD.routeMetadata.set('bahn1Inorth', ['Track 1']);
bahnSHD.routeMetadata.set('bahn1Isouth', ['Track 1']);
bahnSHD.routeMetadata.set('bahn1Jnorth', ['Track 1']);
bahnSHD.routeMetadata.set('bahn1Jsouth', ['Track 1']);
bahnSHD.routeMetadata.set('bahn1JXnorth', ['Track 1']);
bahnSHD.routeMetadata.set('bahn1JXsouth', ['Track 1']);

stopsMap.set('bahnSHD', bahnSHD);

const bahnWHO = {
    id: 'bahnWHO',
    mode: 'bahn',
    city: 'Whiteley',
    stopName: 'Olympia Boulevard',
    code: 'WHO',
    routeMetadata: new Map()
}

bahnWHO.routeMetadata.set('bahn1north', ['Track 1']);
bahnWHO.routeMetadata.set('bahn1south', ['Track 6']);
bahnWHO.routeMetadata.set('bahn1Xnorth', ['Track 3']);
bahnWHO.routeMetadata.set('bahn1Xsouth', ['Track 4']);
bahnWHO.routeMetadata.set('bahn1Jnorth', ['Track 2']);
bahnWHO.routeMetadata.set('bahn1Jsouth', ['Track 5']);
bahnWHO.routeMetadata.set('bahn1JXnorth', ['Track 2']);
bahnWHO.routeMetadata.set('bahn1JXsouth', ['Track 5']);

stopsMap.set('bahnWHO', bahnWHO);

const bahnWHQ = {
    id: 'bahnWHO',
    mode: 'bahn',
    city: 'Whiteley',
    stopName: 'Quins Junction',
    code: 'WHQ',
    routeMetadata: new Map()
}

bahnWHQ.routeMetadata.set('bahn1north', ['Platform 11']);
bahnWHQ.routeMetadata.set('bahn1south', ['Platform 12']);
bahnWHQ.routeMetadata.set('bahn1Xnorth', ['Platform 11']);
bahnWHQ.routeMetadata.set('bahn1Xsouth', ['Platform 12']);
bahnWHQ.routeMetadata.set('bahn1Inorth', ['Platform 11']);
bahnWHQ.routeMetadata.set('bahn1Isouth', ['Platform 12']);

stopsMap.set('bahnWHQ', bahnWHQ);

const bahnZQA = {
    id: 'bahnZQA',
    mode: 'bahn',
    city: 'Zaquar',
    stopName: 'Air & Sea Ports',
    code: 'ZQA',
    routeMetadata: new Map()
}

bahnZQA.routeMetadata.set('bahn1north', ['Track 1']);
bahnZQA.routeMetadata.set('bahn1south', ['Track 3']);
bahnZQA.routeMetadata.set('bahn1Xnorth', ['Track 1']);
bahnZQA.routeMetadata.set('bahn1Xsouth', ['Track 3']);
bahnZQA.routeMetadata.set('bahn1Jnorth', ['Track 1']);
bahnZQA.routeMetadata.set('bahn1Jsouth', ['Track 3']);
bahnZQA.routeMetadata.set('bahn1JXnorth', ['Track 1']);
bahnZQA.routeMetadata.set('bahn1JXsouth', ['Track 3']);
bahnZQA.routeMetadata.set('bahnZQcw', null);
bahnZQA.routeMetadata.set('bahnZQccw', null);

stopsMap.set('bahnZQA', bahnZQA);

const bahnZQL = {
    id: 'bahnZQL',
    mode: 'bahn',
    city: 'Zaquar',
    stopName: 'Loreen Terminal',
    code: 'ZQL',
    routeMetadata: new Map()
}

bahnZQL.routeMetadata.set('bahn1north', ['Ticket Machine A1', 'Track 4']);
bahnZQL.routeMetadata.set('bahn1south', ['Ticket Machine A2', 'Track 9']);
bahnZQL.routeMetadata.set('bahn1Xnorth', ['Ticket Machine A3', 'Track 6']);
bahnZQL.routeMetadata.set('bahn1Xsouth', ['Ticket Machine A4', 'Track 7']);
bahnZQL.routeMetadata.set('bahn1Jnorth', ['Ticket Machine A7', 'Track 4']);
bahnZQL.routeMetadata.set('bahn1Jsouth', ['Ticket Machine C1', 'Track 9']);
bahnZQL.routeMetadata.set('bahn1JXnorth', ['Ticket Machine A8', 'Track 6']);
bahnZQL.routeMetadata.set('bahn1JXsouth', ['Ticket Machine C2', 'Track 7']);
bahnZQL.routeMetadata.set('bahnZQcw', ['Ticket Machine A5', 'Track 2']);
bahnZQL.routeMetadata.set('bahnZQccw', ['Ticket Machine A6', 'Track 11']);

stopsMap.set('bahnZQL', bahnZQL);

const bahnZQT = {
    id: 'bahnZQT',
    mode: 'bahn',
    city: 'Zaquar',
    stopName: 'Tanzanite Station',
    code: 'ZQT',
    routeMetadata: new Map()
}

bahnZQT.routeMetadata.set('bahnZQcw', ['Track 43']);
bahnZQT.routeMetadata.set('bahnZQccw', ['Track 44']);

stopsMap.set('bahnZQT', bahnZQT);

const bahn1north = {
    id: 'bahn1north',
    mode: 'bahn',
    type: 'mainline',
    bullet: 'intraroute/assets/intrabahn/bullets/1.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1-white.png',
    bulletAltText: 'IntraBahn 1',
    routeName: 'Intrepid',
    terminus: bahnWHQ,
    terminusCity: bahnWHQ.city,
    terminusStopName: bahnWHQ.stopName,
    useFullNameIn: [bahnWHO]
}

routesMap.set('bahn1north', bahn1north);

const bahn1south = {
    id: 'bahn1south',
    mode: 'bahn',
    type: 'mainline',
    bullet: 'intraroute/assets/intrabahn/bullets/1.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1-white.png',
    bulletAltText: 'IntraBahn 1',
    routeName: 'Intrepid',
    terminus: bahnZQA,
    terminusCity: bahnZQA.city,
    terminusStopName: bahnZQA.stopName,
    useFullNameIn: [bahnZQL]
}

routesMap.set('bahn1south', bahn1south);

const bahn1Xnorth = {
    id: 'bahn1Xnorth',
    mode: 'bahn',
    type: 'express',
    bullet: 'intraroute/assets/intrabahn/bullets/1X.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1X-white.png',
    bulletAltText: 'IntraBahn 1X',
    routeName: 'Intrepid Express',
    terminus: bahnWHQ,
    terminusCity: bahnWHQ.city,
    terminusStopName: bahnWHQ.stopName,
    useFullNameIn: [bahnWHO]
}

routesMap.set('bahn1Xnorth', bahn1Xnorth);

const bahn1Xsouth = {
    id: 'bahn1Xsouth',
    mode: 'bahn',
    type: 'express',
    bullet: 'intraroute/assets/intrabahn/bullets/1X.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1X-white.png',
    bulletAltText: 'IntraBahn 1X',
    routeName: 'Intrepid Express',
    terminus: bahnZQA,
    terminusCity: bahnZQA.city,
    terminusStopName: bahnZQA.stopName,
    useFullNameIn: [bahnZQL]
}

routesMap.set('bahn1Xsouth', bahn1Xsouth);

const bahn1Inorth = {
    id: 'bahn1Inorth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1i.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1i-white.png',
    bulletAltText: 'IntraBahn 1i',
    routeName: 'Schillerton Branch North',
    terminus: bahnWHQ,
    terminusCity: bahnWHQ.city,
    terminusStopName: bahnWHQ.stopName,
    useFullNameIn: [null]
}

routesMap.set('bahn1Inorth', bahn1Inorth);

const bahn1Isouth = {
    id: 'bahn1Isouth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1i.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1i-white.png',
    bulletAltText: 'IntraBahn 1i',
    routeName: 'Schillerton Branch North',
    terminus: bahnSHD,
    terminusCity: bahnSHD.city,
    terminusStopName: bahnSHD.stopName,
    useFullNameIn: [bahnSHC]
}

routesMap.set('bahn1Isouth', bahn1Isouth);

const bahn1Jnorth = {
    id: 'bahn1Jnorth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1j.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1j-white.png',
    bulletAltText: 'IntraBahn 1j',
    routeName: 'Schillerton Branch South',
    terminus: bahnSHD,
    terminusCity: bahnSHD.city,
    terminusStopName: bahnSHD.stopName,
    useFullNameIn: [bahnSHC]
}

routesMap.set('bahn1Jnorth', bahn1Jnorth);

const bahn1Jsouth = {
    id: 'bahn1Jsouth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1j.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1j-white.png',
    bulletAltText: 'IntraBahn 1j',
    routeName: 'Schillerton Branch South',
    terminus: bahnZQA,
    terminusCity: bahnZQA.city,
    terminusStopName: bahnZQA.stopName,
    useFullNameIn: [bahnZQL]
}

routesMap.set('bahn1Jsouth', bahn1Jsouth);

const bahn1JXnorth = {
    id: 'bahn1JXnorth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1jX.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1jX-white.png',
    bulletAltText: 'IntraBahn 1jX',
    routeName: 'Schillerton Branch South Express',
    terminus: bahnSHD,
    terminusCity: bahnSHD.city,
    terminusStopName: bahnSHD.stopName,
    useFullNameIn: [bahnSHC]
}

routesMap.set('bahn1JXnorth', bahn1JXnorth);

const bahn1JXsouth = {
    id: 'bahn1JXsouth',
    mode: 'bahn',
    type: 'branch',
    bullet: 'intraroute/assets/intrabahn/bullets/1jX.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/1jX-white.png',
    bulletAltText: 'IntraBahn 1jX',
    routeName: 'Schillerton Branch South Express',
    terminus: bahnZQA,
    terminusCity: bahnZQA.city,
    terminusStopName: bahnZQA.stopName,
    useFullNameIn: [bahnZQL]
}

routesMap.set('bahn1JXsouth', bahn1JXsouth);

const bahnZQcw = {
    id: 'bahnZQcw',
    mode: 'bahn',
    type: 'shuttle',
    bullet: 'intraroute/assets/intrabahn/bullets/ZQ.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/ZQ-white.png',
    bulletAltText: 'IntraBahn ZQ',
    routeName: 'Zaquar Shuttle',
    terminus: null,
    terminusCity: null,
    terminusStopName: null,
    useFullNameIn: null,
}

routesMap.set('bahnZQcw', bahnZQcw);

const bahnZQccw = {
    id: 'bahnZQccw',
    mode: 'bahn',
    type: 'shuttle',
    bullet: 'intraroute/assets/intrabahn/bullets/ZQ.png',
    bulletWhite: 'intraroute/assets/intrabahn/bullets/ZQ-white.png',
    bulletAltText: 'IntraBahn ZQ',
    routeName: 'Zaquar Shuttle',
    terminus: null,
    terminusCity: null,
    terminusStopName: null,
    useFullNameIn: null,
}

routesMap.set('bahnZQccw', bahnZQccw);

const fallbackImg = 'intraroute/assets/intrabahn/FelineNoImage.png'

function stopBox(stop, typeStartTransferEnd, documentId) {

    let startTransferEnd;
    if (typeStartTransferEnd === 'start') {
        startTransferEnd = 'Start at:';
    } else if (typeStartTransferEnd === 'transfer') {
        startTransferEnd = 'Transfer at:'
    } else if (typeStartTransferEnd === 'end') {
        startTransferEnd = 'Final destination:'
    } else {
        startTransferEnd = null;
    }

    let mode = stop.mode;

    let modeImage;
    let modeAlt;

    if (mode === 'bahn') {
        modeImage = 'intraroute/logos/intrabahn-white.svg';
        modeAlt = 'IntraBahn';
    }

    document.getElementById(documentId).innerHTML = `
        <div class="stop-box">
            <p class="start-transfer-end">${startTransferEnd ?? ""}</p>
            <p class="stop-city-code"><span class="stop-city bold">${stop.city ?? ""}</span> <span class="stop-code">(${stop.code ?? ""})</span></p>
            <p class="stop-stop-name">${stop.stopName ?? ""}</p>
            <div class="mode-logo-box">
                <img class="mode-logo bahn-logo" src="${modeImage ?? ""}" alt="${modeAlt ?? ""}">
            </div>
        </div>
    `;

}

function bahnRouteBox(routes, stop1, stop2, numOfStops, documentId) {

    let route1 = routes[0];

    let terminusStopName;

    if (route1.useFullNameIn[0] !== null) {
        if (route1.useFullNameIn[0].id === stop1.id) {
            terminusStopName = route1.terminusStopName;
        } else {
            terminusStopName = null;
        }
    }

    let stop1metadata1 = stop1.routeMetadata.get(route1.id)[0];
    let stop2metadata1 = stop2.routeMetadata.get(route1.id)[0];

    let stop1metadata2;
    let stop2metadata2;

    if (stop1.routeMetadata.get(route1.id)[1]) {
        stop1metadata2 = stop1.routeMetadata.get(route1.id)[1];
    } else {
        stop1metadata2 = null;
    }

    if (stop2.routeMetadata.get(route1.id)[1]) {
        stop2metadata2 = stop2.routeMetadata.get(route1.id)[1];
    } else {
        stop2metadata2 = null;
    }

    let numOfStopsExt;

    if (numOfStops === 1) {
        numOfStopsExt = '1 stop';
    } else {
        numOfStopsExt = `${numOfStops} stops`
    }

    let displayClass2routes;
    let displayClass3routes;
    let displayClass4routes;
    let displayClass5routes;
    let displayClass6routes;
    let displayClass7routes;
    let displayClass8routes;
    let displayClass9routes;
    let displayClass10routes;

    let route2bullet;
    let route2bulletWhite;
    let route2bulletAltText;
    let route3bullet;
    let route3bulletAltText;
    let route4bullet;
    let route4bulletAltText;
    let route5bullet;
    let route5bulletAltText;
    let route6bullet;
    let route6bulletAltText;
    let route7bullet;
    let route7bulletAltText;
    let route8bullet;
    let route8bulletAltText;
    let route9bullet;
    let route9bulletAltText;
    let route10bullet;
    let route10bulletAltText;

    if (routes.length < 2) {
        displayClass2routes = 'display-none';
        route2bullet = fallbackImg;
        route2bulletWhite = fallbackImg;
        route2bulletAltText = 'N/A';
    } else {
        displayClass2routes = null;
        route2bullet = routes[1].bullet;
        route2bulletWhite = routes[1].bulletWhite;
        route2bulletAltText = routes[1].bulletAltText;
    }

    if (routes.length < 3) {
        displayClass3routes = 'display-none';
        route3bullet = fallbackImg;
        route3bulletAltText = 'N/A';
    } else {
        displayClass3routes = null;
        route3bullet = routes[2].bullet;
        route3bulletAltText = routes[2].bulletAltText;
    }

    if (routes.length < 4) {
        displayClass4routes = 'display-none';
        route4bullet = fallbackImg;
        route4bulletAltText = 'N/A';
    } else {
        displayClass4routes = null;
        route4bullet = routes[3].bullet;
        route4bulletAltText = routes[3].bulletAltText;
    }

    if (routes.length < 5) {
        displayClass5routes = 'display-none';
        route5bullet = fallbackImg;
        route5bulletAltText = 'N/A';
    } else {
        displayClass5routes = null;
        route5bullet = routes[4].bullet;
        route5bulletAltText = routes[4].bulletAltText;
    }

    if (routes.length < 6) {
        displayClass6routes = 'display-none';
        route6bullet = fallbackImg;
        route6bulletAltText = 'N/A';
    } else {
        displayClass6routes = null;
        route6bullet = routes[5].bullet;
        route6bulletAltText = routes[5].bulletAltText;
    }

    if (routes.length < 7) {
        displayClass7routes = 'display-none';
        route7bullet = fallbackImg;
        route7bulletAltText = 'N/A';
    } else {
        displayClass7routes = null;
        route7bullet = routes[6].bullet;
        route7bulletAltText = routes[6].bulletAltText;
    }

    if (routes.length < 8) {
        displayClass8routes = 'display-none';
        route8bullet = fallbackImg;
        route8bulletAltText = 'N/A';
    } else {
        displayClass8routes = null;
        route8bullet = routes[7].bullet;
        route8bulletAltText = routes[7].bulletAltText;
    }

    if (routes.length < 9) {
        displayClass9routes = 'display-none';
        route9bullet = fallbackImg;
        route9bulletAltText = 'N/A';
    } else {
        displayClass9routes = null;
        route9bullet = routes[8].bullet;
        route9bulletAltText = routes[8].bulletAltText;
    }

    if (routes.length < 10) {
        displayClass10routes = 'display-none';
        route10bullet = fallbackImg;
        route10bulletAltText = 'N/A';
    } else {
        displayClass10routes = null;
        route10bullet = routes[9].bullet;
        route10bulletAltText = routes[9].bulletAltText;
    }

    let multiType;

    if (routes[1]) {
        multiType = routes[1].type;
    }

    let displayClassSingleOtherRoute;

    if (routes.length === 2) {
        displayClassSingleOtherRoute = null;
    } else {
        displayClassSingleOtherRoute = 'display-none'
    }

    document.getElementById(documentId).innerHTML = `
    <div class="segment segment-bahn segment-bahn-${route1.type}">
        <div class="mode-logo-box">
            <img class="mode-logo bahn-logo" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
        </div>
        <div class="route-info-box">
            <img class="bullet bahn-bullet" src="${route1.bulletWhite}" alt="${route1.bulletAltText}">
            <div class="route-info-text-box">
                <p class="route-info-text route-name bold">${route1.routeName}</p>
                <p class="route-info-text route-towards">towards</p>
                <p class="route-info-text route-destination desktop"><span class="destination-city bold">${route1.terminusCity}</span> <span class="destination-stop-name">${terminusStopName ?? ""}</span></p>
                <p class="route-info-text route-destination mobile"><span class="destination-city bold">${route1.terminusCity}</span></p>
                <p class="route-info-text route-destination-name mobile"><span class="destination-stop-name">${terminusStopName ?? ""}</span></p>
            </div>
        </div>
        <div class="other-routes other-routes-bahn-${multiType} ${displayClassSingleOtherRoute ?? ""}">
            <div class="other-routes-left">
                <p class="bold">or</p>
                <img class="bullet-small bahn-bullet-small" src="${route2bulletWhite ?? ""}" alt="${route2bulletAltText ?? ""}">
            </div>
            <div class="mode-logo-small-box">
                <img class="mode-logo-small bahn-logo-small" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
            </div>
        </div>
        <div class="other-routes other-routes-bahn-multi ${displayClass3routes ?? ""}">
            <div class="other-routes-left">
                <p class="bold">or</p>
                <img class="bullet-small bahn-bullet-small ${displayClass2routes ?? ""}" src="${route2bullet ?? ""}" alt="${route2bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass3routes ?? ""}" src="${route3bullet ?? ""}" alt="${route3bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass4routes ?? ""}" src="${route4bullet ?? ""}" alt="${route4bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass5routes ?? ""}" src="${route5bullet ?? ""}" alt="${route5bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass6routes ?? ""}" src="${route6bullet ?? ""}" alt="${route6bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass7routes ?? ""}" src="${route7bullet ?? ""}" alt="${route7bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass8routes ?? ""}" src="${route8bullet ?? ""}" alt="${route8bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass9routes ?? ""}" src="${route9bullet ?? ""}" alt="${route9bulletAltText ?? ""}">
                <img class="bullet-small bahn-bullet-small ${displayClass10routes ?? ""}" src="${route10bullet ?? ""}" alt="${route10bulletAltText ?? ""}">
            </div>
            <div class="mode-logo-small-box">
                <img class="mode-logo-small bahn-logo-small" src="intraroute/logos/intrabahn.svg" alt="IntraBahn">
            </div>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">${stop1.city}</span> <span class="stop-code">(${stop1.code})</span></p>
        <p class="stop-stop-name">${stop1.stopName ?? ""}</p>
        <p class="stop-metadata bold">${stop1metadata1}</p>
        <p class="stop-metadata bold">${stop1metadata2 ?? ""}</p>
        <div class="arrow-and-stops">
            <img class="arrow" src="intraroute/assets/down-arrow.svg" alt="arrow pointing down">
            <p class="num-of-stops">${numOfStopsExt} until...</p>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">${stop2.city}</span> <span class="stop-code">(${stop2.code})</span></p>
        <p class="stop-stop-name">${stop2.stopName ?? ""}</p>
        <p class="stop-metadata bold">${stop2metadata1}</p>
        <p class="stop-metadata bold">${stop2metadata2 ?? ""}</p>
    </div>
    `;

}

function bahnZQrouteBoxZQLtoZQT(documentId) {

    document.getElementById(documentId).innerHTML = `
    <div class="segment segment-bahn segment-bahn-shuttle">
        <div class="mode-logo-box">
            <img class="mode-logo bahn-logo" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
        </div>
        <div class="route-info-box">
            <img class="bullet bahn-bullet" src="intraroute/assets/intrabahn/bullets/ZQ-white.png" alt="IntraBahn ZQ">
            <div class="route-info-text-box">
                <p class="route-info-text route-name bold">Zaquar Shuttle</p>
                <p class="route-info-text route-towards">towards</p>
                <p class="route-info-text route-destination"><span class="destination-city bold">Zaquar</span> <br class="mobile"><span class="destination-stop-name">Tanzanite Station</span></p>
            </div>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQL)</span></p>
        <p class="stop-stop-name">Loreen Terminal</p>
        <p class="stop-metadata bold">Ticket Machine A1</p>
        <p class="stop-metadata bold">Track 4</p>
        <div class="arrow-and-stops">
            <img class="arrow" src="intraroute/assets/down-arrow.svg" alt="arrow pointing down">
            <p class="num-of-stops">1 stop until...</p>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQT)</span></p>
        <p class="stop-stop-name">Tanzanite Station</p>
        <p class="stop-metadata bold">Track 43</p>
    </div>
    `;

}

function bahnZQrouteBoxZQTtoZQL(documentId) {

    document.getElementById(documentId).innerHTML = `
    <div class="segment segment-bahn segment-bahn-shuttle">
        <div class="mode-logo-box">
            <img class="mode-logo bahn-logo" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
        </div>
        <div class="route-info-box">
            <img class="bullet bahn-bullet" src="intraroute/assets/intrabahn/bullets/ZQ-white.png" alt="IntraBahn ZQ">
            <div class="route-info-text-box">
                <p class="route-info-text route-name bold">Zaquar Shuttle</p>
                <p class="route-info-text route-towards">towards</p>
                <p class="route-info-text route-destination"><span class="destination-city bold">Zaquar</span> <br class="mobile"><span class="destination-stop-name">Loreen Terminal</span></p>
            </div>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQT)</span></p>
        <p class="stop-stop-name">Tanzanite Station</p>
        <p class="stop-metadata bold">Track 44</p>
        <div class="arrow-and-stops">
            <img class="arrow" src="intraroute/assets/down-arrow.svg" alt="arrow pointing down">
            <p class="num-of-stops">1 stop until...</p>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQL)</span></p>
        <p class="stop-stop-name">Loreen Terminal</p>
        <p class="stop-metadata bold">Track 11</p>
    </div>
    `;

}

function bahnZQrouteBoxZQTtoZQA(documentId) {

    document.getElementById(documentId).innerHTML = `
    <div class="segment segment-bahn segment-bahn-shuttle">
        <div class="mode-logo-box">
            <img class="mode-logo bahn-logo" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
        </div>
        <div class="route-info-box">
            <img class="bullet bahn-bullet" src="intraroute/assets/intrabahn/bullets/ZQ-white.png" alt="IntraBahn ZQ">
            <div class="route-info-text-box">
                <p class="route-info-text route-name bold">Zaquar Shuttle</p>
                <p class="route-info-text route-towards">towards</p>
                <p class="route-info-text route-destination"><span class="destination-city bold">Zaquar</span> <br class="mobile"><span class="destination-stop-name">Air & Sea Ports</span></p>
            </div>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQT)</span></p>
        <p class="stop-stop-name">Tanzanite Station</p>
        <p class="stop-metadata bold">Track 43</p>
        <div class="arrow-and-stops">
            <img class="arrow" src="intraroute/assets/down-arrow.svg" alt="arrow pointing down">
            <p class="num-of-stops">1 stop until...</p>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQA)</span></p>
        <p class="stop-stop-name">Air & Sea Ports</p>
        <p class="stop-metadata bold">Track 3</p>
    </div>
    `;

}

function bahnZQrouteBoxZQAtoZQT(documentId) {

    document.getElementById(documentId).innerHTML = `
    <div class="segment segment-bahn segment-bahn-shuttle">
        <div class="mode-logo-box">
            <img class="mode-logo bahn-logo" src="intraroute/logos/intrabahn-white.svg" alt="IntraBahn">
        </div>
        <div class="route-info-box">
            <img class="bullet bahn-bullet" src="intraroute/assets/intrabahn/bullets/ZQ-white.png" alt="IntraBahn ZQ">
            <div class="route-info-text-box">
                <p class="route-info-text route-name bold">Zaquar Shuttle</p>
                <p class="route-info-text route-towards">towards</p>
                <p class="route-info-text route-destination"><span class="destination-city bold">Zaquar</span> <br class="mobile"><span class="destination-stop-name">Tanzanite Station</span></p>
            </div>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQA)</span></p>
        <p class="stop-stop-name">Air & Sea Ports</p>
        <p class="stop-metadata bold">Track 1</p>
        <div class="arrow-and-stops">
            <img class="arrow" src="intraroute/assets/down-arrow.svg" alt="arrow pointing down">
            <p class="num-of-stops">1 stop until...</p>
        </div>
        <p class="stop-city-code"><span class="stop-city bold">Zaquar</span> <span class="stop-code">(ZQL)</span></p>
        <p class="stop-stop-name">Loreen Terminal</p>
        <p class="stop-metadata bold">Track 44</p>
    </div>
    `;

}

function outputToUI() {

    document.getElementById('gray-box-before').classList.add('display-none')
    document.getElementById('back-button-box').classList.remove('display-none')
  
    for (let i = 0; i < 100000; i++) {
        
        let startTransferEnd;

        if (finalPath[i].firstStop === finalPath[0].firstStop) {
            startTransferEnd = 'start';
        } else {
            startTransferEnd = 'transfer';
        }

        stopBox(stopsMap.get(finalPath[i].firstStop), startTransferEnd, `stop-box-${i}`)
        
        if (!(finalPath[i + 1])) {
            stopBox(stopsMap.get(finalPath[i].lastStop), 'end', `stop-box-${i + 1}`);
            break;
        }
        
    }

    for (let j = 0; j < finalPath.length; j++) {

        let routes = [];

        for (let i = 0; i < finalPath[j].routes.length; i++) {
            routes.push(routesMap.get(finalPath[j].routes[i]));
        }

        let stop1 = stopsMap.get(finalPath[j].firstStop);
        let stop2 = stopsMap.get(finalPath[j].lastStop);
        
        let docId = `route-box-${j}`

        if (routes[0] === bahnZQcw || routes[0] === bahnZQccw) {

            if (stop1 === bahnZQL && stop2 === bahnZQT) {
                bahnZQrouteBoxZQLtoZQT(docId);
            } else if (stop1 === bahnZQT && stop2 === bahnZQL) {
                bahnZQrouteBoxZQTtoZQL(docId);
            } else if (stop1 === bahnZQT && stop2 === bahnZQA) {
                bahnZQrouteBoxZQTtoZQA(docId);
            } else if (stop1 === bahnZQA && stop2 === bahnZQT) {
                bahnZQrouteBoxZQAtoZQT(docId);
            }

        } else {

            bahnRouteBox(routes, stop1, stop2, finalPath[j].numOfStops, docId);

        }
        
    }
}

document.getElementById("submit-button").addEventListener('click', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    outputToUI();
})

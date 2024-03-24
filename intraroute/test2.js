const bahnKNX = [
    {stop: 'bahnWHO', via: ['bahn1north', 'bahn1Jnorth']}, // index 0
    {stop: 'bahnZQL', via: ['bahn1north', 'bahn1Jnorth']} // index 1
]

const bahnSHC = [
    {stop: 'bahnSHD', via: ['bahn1Isouth', 'bahn1Jnorth', 'bahn1JXnorth']}, // index 0
    {stop: 'bahnWHO', via: ['bahn1Jsouth', 'bahn1JXsouth']}, // index 1
    {stop: 'bahnWHQ', via: ['bahn1Inorth']}, // index 2
]

const bahnSHD = [
    {stop: 'bahnSHD', via: ['bahn1Inorth', 'bahn1Jsouth', 'bahn1JXsouth']}, // index 0
    {stop: 'railSHM', via: ['walkBahnSHDtoRailSHM']} // index 1
]

const bahnWHO = [
    {stop: 'bahnKNX', via: ['bahn1south, bahn1Jsouth']}, // index 0
    {stop: 'bahnSHC', via: ['bahn1Jnorth', 'bahn1JXnorth']}, // index 1
    {stop: 'bahnWHQ', via: ['bahn1north', 'bahn1Xnorth']}, // index 2
    {stop: 'bahnZQL', via: ['bahn1Xsouth', 'bahn1JXsouth']}, // index 3
    {stop: 'busWHO', via: ['walkBahnWHOtoBusWHO']}, // index 4
    {stop: 'railWHO', via: ['walkBahnWHOtoRailWHO']} // index 5
]

const bahnWHQ = [
    {stop: 'bahnSHC', via: ['bahn1Isouth']}, // index 0
    {stop: 'bahnWHO', via: ['bahn1south', 'bahn1Xsouth']} // index 1
]

const bahnZQA = [
    {stop: 'airZAQ', via: ['walkBahnZQAtoAirZAQ']}, // index 0
    {stop: 'bahnZQL', via: ['bahn1north', 'bahn1Xnorth', 'bahn1Jnorth', 'bahn1JXnorth', 'bahnZQcw']}, // index 1
    {stop: 'bahnZQT', via: ['bahnZQccw']}, // index 2
    {stop: 'busZAQ', via: ['walkBahnZQAtoBusZAQ']}, // index 3
    {stop: 'railZAQ', via: ['walkBahnZQAtoRailZAQ']}, // index 4
    {stop: 'sailZQW', via: ['walkBahnZQAtoSailZQW']} // index 5
]

const bahnZQL = [
    {stop: 'bahnKNX', via: ['bahn1north', 'bahn1Jnorth']}, // index 0
    {stop: 'bahnWHO', via: ['bahn1Xnorth', 'bahn1JXnorth']}, // index 1
    {stop: 'bahnZQA', via: ['bahn1south', 'bahn1Xsouth', 'bahn1Jsouth', 'bahn1JXsouth', 'bahnZQccw']}, // index 2
    {stop: 'bahnZQT', via: ['bahnZQcw']} // index 3
]

const bahnZQT = [
    {stop: 'bahnZQA', via: ['bahnZQcw']}, // index 0
    {stop: 'bahnZQL', via: ['bahnZQccw']}, // index 1
    {stop: 'railZQT', via: ['walkBahnZQTtoRailZQT']} // index 2
]
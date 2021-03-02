const roads = [
    "Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall", "Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm", "Marketplace-Farm", "Marketplace-Shop", "Shop-Town Hall"
];


function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

console.log(roadGraph)


function VillageState(place, parcel) {
    this.place = place
    this.parcel = parcel
}

VillageState.prototype.move = function (destination) {
    if (!roadGraph[this.place].includes(destination)) {
        return this
    } else {
        let parcels = this.parcel.map(p => {
            if (p.place !== this.place) {
                return p
            }
            return {
                place: destination,
                address: p.address
            }
        }).filter(p => p.place != p.address)
        return new VillageState(destination, parcels)
    }
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice]
}

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

// let first = new VillageState('Post Office', [{
//     place: 'Post Office',
//     address: 'Alice\'s House'
// }])

// console.log(first)

// console.log(first.move('Alice\'s House'))

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcel.length == 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1 = [], robot2, memory2 = []) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random()
        total1 += runRobot(state, robot1, memory1)
        console.log(runRobot(state,robot1, memory1))
        total2 += runRobot(state, robot2, memory2)
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
}

//runRobot(VillageState.random(), randomRobot); 

// runRobot(VillageState.random(100), randomRobot)

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}


function goalOrientedRobot({ place, parcel }, route) {
    if (route.length == 0) {
        let parcelCopy = parcel[0];
        if (parcelCopy.place != place) {
            route = findRoute(roadGraph, place, parcelCopy.place);
        } else {
            route = findRoute(roadGraph, place, parcelCopy.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

compareRobots(routeRobot, [], goalOrientedRobot, [])
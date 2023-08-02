const vehicle = function(type, numWheels, color) {
    const vehicle = {};  
    vehicle.type = type;
    vehicle.numWheels = numWheels;
    vehicle.color = color;
    
    return vehicle;
}

const car = vehicle("car", 4, "blue");
const bike = vehicle("bike", 2, "silver");
const skateboard = vehicle("skateboard", 4, "black");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key, vehicle[key]);
    }
};
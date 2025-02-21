const reverseString = function(world) {

    let world_reversed = "";
    let position = world.length;
    for(i = 0; i < position; i++){
        world_reversed += world[position-1-i];    
    }
    return world_reversed;
};

// Do not edit below this line
module.exports = reverseString;

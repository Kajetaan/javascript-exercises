const { cobolCase } = require("case-anything");

const removeFromArray = function(collection, ...elements) {
    newCollection = []; 
    collection.forEach((element) => {
        if(!elements.includes(element)){
            newCollection.push(element);
        }
    });

    return newCollection;
}
// Do not edit below this line
module.exports = removeFromArray;

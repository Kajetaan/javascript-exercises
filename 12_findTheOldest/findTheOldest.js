const findTheOldest = function (people) {
    
    const updatedPeople = people.map(person => {
        if (!person.yearOfDeath) {
          // If the person is alive, set their yearOfDeath to 2025
          return { ...person, yearOfDeath: 2025 };
        }
        return person; // Return the person object as is if they have a yearOfDeath
      });

    const peopleWithAge = updatedPeople.map(person => {
    const age = person.yearOfDeath - person.yearOfBirth;
    return { name: person.name, age }; // Return an object with only name and age
    });
    
    const oldestAge = Math.max(...peopleWithAge.map(person => person.age)); // Get the maximum age

    const oldestPerson = peopleWithAge.find(person => person.age === oldestAge); // Find the person with that age

    return oldestPerson;
      
  };

// Do not edit below this line
module.exports = findTheOldest;

/** FEEDBACK: Great job! You have all test cases passing! */
const coolGreeting = (person) => {
  return person.isCool === true ? `What is UP ${(person.name).toUpperCase()}? How you been doin'?` : `Greetings ${person.name}, how have you been lately?`
};

const haveBirthday = (person) => {
  return person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
  return person.spyHandle
};

const carMaker = (name, maker, year) => {
  return { name, maker, year, needsOilChange: false }
};

// const person1 = {
//   name: 'Sara',
//   age: 30,
//   friends: ['Bob', 'Joe', 'Sally'],
// }

const weAreNotFriends = (person) => {
  let enemy = person.friends.pop()
  return enemy
};

// const jo = {
//   name: 'Jo',
//   age: 34,
//   hobbies: ['running', 'biking', 'baking'],
// };


const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }

};
//listHobbies(jo)

const getNextOpponent = (team) => {
  if (team.matches[0] === undefined) {
    return null;
  } else {
    return team.matches[0].teamName;
  }

};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = (obj) => {
  return Object.values(obj)
};

const users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },
];

const convertToMatrix = (arr) => {
  if (arr.length === 0) return [];
  newArr = []
  newArr.push(Object.keys(arr[0]))
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Object.values(arr[i]))

  }
  return newArr
};
console.log(convertToMatrix([]))

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};

let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }

  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }

  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }

  summary() {
    console.log(
      `I live in ${this.location} and I have ${this.numberOfLegs}`,
    );
  }
}

class createDog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }

  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }

  changeName(name) {
    this.name = name;
    return this.name;
  }

  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }

  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
console.log(obj);

function getFullName(user) {
  const { firstName } = user;
  const { lastName } = user;

  return `${firstName} ${lastName}`;
}
console.log(getFullName('vivek kumar'));

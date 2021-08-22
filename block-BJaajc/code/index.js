function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

function isPalindrome(name) {
  let reverseName = name.split('').reverse().join('');
  return reverseName === name ? true : false;
}

function getCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumfernce}`;
}

function getArea(radius) {
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}

module.export = { getFullName, isPalindrome, getCircumference, getArea };

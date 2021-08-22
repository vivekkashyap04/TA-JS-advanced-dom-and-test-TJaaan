function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

function isPalindrome(name) {
  let reverseName = name.split('').reverse().join('');
  return reverseName === name ? true : false;
}

function getCircumference(radius) {
  let circumference = Math.floor(2 * Math.PI * radius);
  return `The circumference is ${circumference}`;
}

function getArea(radius) {
  let area = Math.floor(Math.PI * radius * radius);
  return `The area is ${area}`;
}

module.exports = { getFullName, isPalindrome, getCircumference, getArea };

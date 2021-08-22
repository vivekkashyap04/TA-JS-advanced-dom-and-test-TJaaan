const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

test('fullName', () => {
  expect(getFullName('vivek', 'kumar').toBe('Vivek Kumar'));
});

test('fullName', () => {
  expect(getFullName('sunny', 'kumar').toBe('sunny Kumar'));
});
test('fullName', () => {
  expect(getFullName('Arya', 'stark').toBe('Arya stark'));
});

test('fullName', () => {
  expect(getFullName('vivek', 'kumar').not.toBe('Vivek'));
});
test('fullName', () => {
  expect(getFullName('vivek', 'kumar').not.toBe(''));
});

test('palindrome', () => {
  expect(isPalindrome('madam').toBe('madam'));
});

test('palindrome', () => {
  expect(isPalindrome('level').toBe('level'));
});

test('palindrome', () => {
  expect(isPalindrome('nun').toBe('nun'));
});

test('getcicumfernce', () => {
  expect(getCircumference(4).toBe(Math.floor(25)));
});

test('getcicumfernce', () => {
  expect(getCircumference(8).toBe(Math.floor(50)));
});

test('arae', () => {
  expect(area(10).toBe(Math.floor(314)));
});

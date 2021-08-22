const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

test('get full name to be John Snow', () => {
  expect(getFullName('John', 'Snow')).toBe('John Snow');
});

test('get full name to be Arya Stark', () => {
  expect(getFullName('Arya', 'Stark')).toBe('Arya Stark');
});

test('get full name to be Arya Stark', () => {
  expect(getFullName('Vivek', 'Kumar')).toBe('Vivek Kumar');
});

test('get full name not to be empty', () => {
  expect(getFullName('Vivek', 'Kumar')).not.toBe('');
});

test('get full name not to be undefined', () => {
  expect(getFullName('Vivek', 'Kumar')).not.toBe(undefined);
});

test('Naman is a Palindrome', () => {
    expect(isPalindrome('naman')).toBe(true);
  });

  test('reviver is a Palindrome', () => {
    expect(isPalindrome('reviver')).toBe(true);
  });
  
  test('receiver is not a Palindrome', () => {
    expect(isPalindrome('receiver')).not.toBe(true);
  });
  
  test('JavaScript is not a Palindrome', () => {
    expect(isPalindrome('javascript')).not.toBe(true);
  });
  
  test('html is not a Palindrome', () => {
      expect(isPalindrome('html')).not.toBe(true);
    });

    test('Circumfrence of circle with radius 7 is 43', () => {
        expect(getCircumference(7)).toBe('The circumference is 43');
    });
    
    test('Circumfrence of circle with radius 7 is 43', () => {
        expect(getCircumference(7)).toBe('The circumference is 43');
    });
    test('Circumfrence of circle with radius 5 is 31', () => {
        expect(getCircumference(5)).toBe('The circumference is 31');
    });
    
    test('Circumfrence of circle with radius 10 is 62', () => {
        expect(getCircumference(10)).toBe('The circumference is 62');
    });
    
    
    test('Area of circle with radius 10 is 314', () => {
        expect(getArea(10)).toBe('The area is 314');
    });
    
    test('Area of circle with radius 7 is 153', () => {
        expect(getArea(7)).toBe('The area is 153');
    });
    
    test('Area of circle with radius 5 is 78', () => {
        expect(getArea(5)).toBe('The area is 78');
    });
const {add,subtract,sum,multiply,power,factorial}  = require("./calculator");

test("add two number and result will be 5", () => {
    expect(add(2,3)).toBe(5)
})

test("subtract two numbers and result will be 5", () => {
    expect(subtract(10,5)).toBe(5);
})

test("sum two numbers and result will be 5", () => {
    expect(sum(2,3)).toBe(5);
})

test("multiply tow numbers and result will be 50", () => {
    expect(multiply(10,5)).toBe(50);
})

test("power of  two numbers and result will be 8", () => {
    expect(power(2,3)).toBe(8);
})

test("factorial of numbers and result will be 120", () => {
    expect(factorial(5)).toBe(120);
})
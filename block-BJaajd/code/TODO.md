# Writing Test Using Jest

1.

Write the test for the class below

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }
}

```

2. Write test for the content of `calculator.js` file.

3. Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```js
function removeFromArray(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]


test("test of array that delete value", () => {
  expect(removeFromAray([1,2,3,4],3)).toEqual([1,2,4]);
})
```

Write three test for `removeFromArray` function

4. List 10 examples of `Matchers` form [https://jestjs.io/docs/en/using-matchers](https://jestjs.io/docs/en/using-matchers). Try to have different methods of different types

5. Write three test for the following function.

```js
function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}

let mockFunction = jest.fn(value => value * 2);
map([2,3,5],mockFunction);

expect(mockFunction.mock.call.length).toBe(3);

```

```js
function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
   acc = reducer(acc, items[index], index, items));
  }
  return acc;
}
```

Hint: You can use this link to learn about how to mock function while testing [https://jestjs.io/docs/en/mock-functions](https://jestjs.io/docs/en/mock-functions)


console.log("Jest Testing..........")
function sum(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

describe("Arithmatic Operations", () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Mul 2 * 3 to equal 6', () => {
    expect(mul(2, 3)).toBe(6);
  });

  test('Div 8 * 2 to equal 4', () => {
    expect(div(8, 2)).toBe(4);
  });

});


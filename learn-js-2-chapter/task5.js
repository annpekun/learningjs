function pow(x, n) {
  let result = x;
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень n не подходит, необходимо другое значение`);
} else {
  alert(pow(x, n));
}


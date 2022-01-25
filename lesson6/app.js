function translate(item) {
  const translate = {
    Anya: 'Аня',
    male: 'мужской',
    female: 'женский',
  };
  return translate[item] || item;
}

function showAlert() {
  const name = document.getElementById('name').value;
  const sex = document.querySelector('input[name="sex"]:checked')?.value;
  const hasMom = document.getElementById('mom').checked;
  const hasDad = document.getElementById('dad').checked;

  if (!name || !sex) {
    alert('Введите имя и пол');
    return;
  }

  let result = `Ваше имя: ${translate(name)}, ваш пол: ${translate(sex)} `;
  if (hasMom) {
    result = result + ', у вас есть мама';
  }

  if (hasDad) {
    result += ' и папа';
  }
  document.getElementById('result').innerHTML = result;
}


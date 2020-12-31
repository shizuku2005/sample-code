// 除外する文字列
const baseExcludesTexts = ['o', 'O', '0', 'I', 'l', '1'];
document.getElementById('excludeTexts').value = baseExcludesTexts.join(',');


// パスワードを生成する為の配列を作る
const passwordTexts = [];
for (let i = 0; i < 26; i++) {
  passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i))
}
for (let i = 0; i < 26; i++) {
  passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i))
}
for (let i = 0; i < 10; i++) {
  passwordTexts.push(i)
}

const inputs = document.forms.inputs,
      passwordListElement = document.getElementById('passwordList'),

      passwordLength = 6,
      generatedNumberOfTimes = 3;

document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  passwordListElement.innerHTML = '';

  const excludeTexts = inputs.excludeTexts.value.split(','),
        excludedpasswordTexts = passwordTexts.filter(text => !(excludeTexts.includes(String(text))));

  for (let i = 0; i < generatedNumberOfTimes; i++) {
    let passwords = '';
    for (let i = 0; i < passwordLength; i++) {
      passwords += excludedpasswordTexts[Math.floor(Math.random() * excludedpasswordTexts.length)];
    }
    const li = document.createElement('li'),
          input = document.createElement('input');
    input.value = passwords;
    li.appendChild(input);
    passwordListElement.appendChild(li);
  }
})
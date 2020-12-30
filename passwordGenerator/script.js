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

const inputForm = document.forms.inputs,
      passwordListElement = document.getElementById('passwordList'),

      passwordLength = 6,
      generatedNumberOfTimes = 3;

document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  passwordListElement.innerHTML = '';

  for (let i = 0; i < generatedNumberOfTimes; i++) {
    let passwords = '';
    for (let i = 0; i < passwordLength; i++) {
      passwords += passwordTexts[Math.floor(Math.random() * passwordTexts.length)];
    }
    const li = document.createElement('li'),
          input = document.createElement('input');
    input.value = passwords;
    li.appendChild(input);
    passwordListElement.appendChild(li);
  }
})
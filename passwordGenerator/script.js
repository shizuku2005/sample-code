const inputForm = document.forms.inputs;
document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  const passwordListElement = document.getElementById('passwordList');
  passwordListElement.innerHTML = '';

  const passwordLength = 6;
  let passwords = '';
  for (let i = 0; i < passwordLength; i++) {
    passwords += Math.floor(Math.random() * 10);
  }
  const li = document.createElement('li'),
        input = document.createElement('input');
  input.value = passwords;
  li.appendChild(input);
  passwordListElement.appendChild(li);
})
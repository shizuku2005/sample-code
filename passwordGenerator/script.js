// 除外する文字列
const baseExcludesTexts = ['o', 'O', '0', 'I', 'l', '1'];
document.getElementById('excludeTexts').value = baseExcludesTexts.join(',');

const inputs = document.forms.inputs,
      passwordListElement = document.getElementById('passwordList'),

      generatedNumberOfTimes = 3;


document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  const isIncludeEnglishLowercase = inputs.includeEnglishLowercase.checked,
        isIncludeEnglishUppercase = inputs.includeEnglishUppercase.checked,
        isIncludeNumber = inputs.includeNumber.checked;

  if (isIncludeEnglishLowercase || isIncludeEnglishUppercase || isIncludeNumber) {

    // パスワードを生成する為の配列を作る
    const passwordTexts = [];

    if (isIncludeEnglishLowercase) {
      for (let i = 0; i < 26; i++) {
        passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i))
      }
    }

    if (isIncludeEnglishUppercase) {
      for (let i = 0; i < 26; i++) {
        passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i))
      }
    }

    if (isIncludeNumber) {
      for (let i = 0; i < 10; i++) {
        passwordTexts.push(i)
      }
    }


    const excludeTexts = inputs.excludeTexts.value.split(','),
          excludedpasswordTexts = passwordTexts.filter(text => !(excludeTexts.includes(String(text))));

    let passwordLength = inputs.stringLength.value,
        isOutOfRange = false;
    if (passwordLength === 'custom') {
      passwordLength = inputs.customLength.value;
      if (passwordLength < 1 || passwordLength > 100) {
        alert('文字数は１〜１００の中で設定してください')
        isOutOfRange = true;
      }
    } else {
      passwordLength = Number(passwordLength)
    }

    if (!isOutOfRange) {
      passwordListElement.innerHTML = '';
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
    }

  } else {
    alert(`「パスワードを構成する文字」には、少なくとも１つ以上の項目にチェックを入れてください）`)
  }
})
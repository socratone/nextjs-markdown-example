---
title: '코드를 넣는 방법'
author: 'John'
---

# 코드를 넣는 방법

코드를 넣는 방법입니다.

```js
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = 'block';
});

button.addEventListener('blur', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = ''; // 초기화
});
```

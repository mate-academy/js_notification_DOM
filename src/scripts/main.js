'use strict';

const pushNotification = (top, right, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.className = `notification ${type}`;
  div.style.cssText = `top: ${top}; right: ${right};`;
  div.append(h2);
  div.append(p);
  h2.className = 'title';
  h2.textContent = title;
  p.textContent = description;
  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
};

pushNotification(
  '50px',
  '50px',
  'Вы выиграли анекдот!',
  `Весь день искал дома сосиски, но так и не нашел.
  Потом посмотрел на довольное лицо тестя и понял: сосиски в тесте.`,
  'success'
);

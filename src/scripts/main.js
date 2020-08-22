'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');

  const div = document.createElement('div');

  div.style.cssText = `top: ${top}px; right: ${right}px`;
  div.style.backgroundColor = '#ffe0b5';
  div.classList = `notification ${type}`;
  div.innerHTML = `<h2>${title}</h2>` + `<p>${description}</p>` + type;
  body.append(div);

  setTimeout(() => div.remove(), 2000);
};

pushNotification(10, 10, 'Title',
  'Every business has a goal, and every business needs people to achieve it.',
  'success');

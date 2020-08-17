'use strict';

const body = document.querySelector('body');

const pushNotification = (top, right, title, description, type) => {
  // write code here

  const div = document.createElement('div');

  div.className = 'notification';
  div.classList.add(type);

  div.insertAdjacentHTML('afterbegin',
    `<h2 class = 'title'> ${title} </h2>
    <p> ${description} </p>
    `);

  div.style.top = top;
  div.style.right = right;

  body.prepend(div);
};

// pushNotification(10, 25, 'warning', 'hello world!!!', 'warning');
pushNotification(10, 25, 'success', 'hello world!!!', 'success');
// pushNotification(10, 25, 'error', 'hello world!!!', 'error');

setTimeout(() => body.children[0].remove(), 2000);

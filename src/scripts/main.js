'use strict';

const pushNotification = (top, right, title, type) => {
  let message = '';

  switch (type) {
    case 'warning':
      message = 'Warning!';
      break;
    case 'success':
      message = 'Success!';
      break;
    case 'error':
      message = 'Error!';
      break;
  }

  const div = document.createElement('div');

  div.className = 'notification';
  div.classList.toggle(type);

  div.insertAdjacentHTML('afterbegin',
    `<h2 class="${title}">Title<p>${message}</p></h2>`);
  div.style.top = `${top}px`;
  div.style.right = `${right}px`;
  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
};

pushNotification(10, 10, 'title', 'success');

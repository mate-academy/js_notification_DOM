'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mainElement = document.querySelector('body');
  const block = document.createElement('div');

  setTimeout(() => {
    block.classList.add('notification');
    block.classList.add(`${type}`);
    block.style.top = `${posTop}px`;
    block.style.right = `${posRight}px`;
    mainElement.append(block);

    block.insertAdjacentHTML(
      'beforeend',
      `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `
    );
  }, 2000);

  setTimeout(() => {
    block.remove();
  }, 4000);
};

// setTimeout(() => {
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success'
);
// }, 2000);

// setTimeout(() => {
pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error'
);
// }, 2000);

// setTimeout(() => {
pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning'
);
// }, 2000);

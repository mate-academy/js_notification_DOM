'use strict';

/**
 * Prints a notification method and then removes it in 2 seconds.
 * @param {number} posTop distance from the top.
 * @param {number} posRight distance from the right.
 * @param {string} title title of the message.
 * @param {string} description text of the message.
 * @param {string} type type of the message (either success, warning or error).
 */
const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const messageHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  message.insertAdjacentHTML('afterbegin', messageHTML);
  document.querySelector('body').appendChild(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);

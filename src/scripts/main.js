'use strict';

const clearNotification = () =>
  [...document.querySelectorAll(`.notification`)].forEach((element) =>
    setTimeout(() => element.remove(), 2000),);

/**
 * @function pushNotification
 * @param {number} posTop
 * @param {number} posRight
 * @param {string} title
 * @param {string} description
 * @param {string} type
 */
const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationHTML = `
          <div class="notification ${type}"
              style="position: absolute; top: ${posTop}px; right: ${posRight}px">
            <h2 class="title">${title}</h2>
            <p>${description}</p>
          </div>`;

  document.body.innerHTML += notificationHTML;
  clearNotification();
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

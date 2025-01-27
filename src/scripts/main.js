'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem = `
    <div
      class="notification ${type}"
      style="top: ${posTop}; right: ${posRight};"
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', elem);

  function removeElem() {
    document.querySelector(`.${type}`).remove();
  }

  setTimeout(removeElem, 2000);

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

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const correctDescription = description.replace(/\n/g, ' <br/>');

  const bodyElem = document.querySelector('body');

  bodyElem.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}">
      <h2 class="title">
        ${title}
      </h2>
      <p>${correctDescription}</p>
    </div>
  `);

  const divMargin = document.querySelector('div');

  divMargin.style.marginTop = `${posTop}px`;
  divMargin.style.marginLeft = `${posRight}px`;
  divMargin.style.width = `max-content`;

  setTimeout(() => {
    divMargin.remove();
  }, 2000);
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

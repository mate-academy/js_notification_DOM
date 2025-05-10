'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem = document.createElement('div');

  document.body.prepend(elem);

  elem.className = `notification ${type}`;
  elem.innerHTML = `<p>${description}</p>`;
  elem.style.top = posTop + 'px';
  elem.style.right = posRight + 'px';

  const heading = document.createElement('h2');

  document.querySelector('.notification').prepend(heading);

  heading.className = 'title';
  heading.textContent = `${title}`;

  setTimeout(() => {
    elem.style.display = 'none';
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

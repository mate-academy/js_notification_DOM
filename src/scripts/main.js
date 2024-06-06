'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add(`notification`);
  div.classList.add(`${type}`);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.textContent = title;
  titleElement.classList.add('title');
  div.appendChild(titleElement);

  const text = document.createElement('p');

  text.textContent = description;

  div.appendChild(text);
  document.body.appendChild(div);
};

const deletMeessage = () => {
  const div = document.querySelectorAll('div');

  div.forEach((i) => (i.style.display = 'none'));
};

setTimeout(deletMeessage, 2000);

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

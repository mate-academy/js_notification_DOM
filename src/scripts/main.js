'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');
  const newH2 = document.createElement('h2');
  const newP = document.createElement('p');

  newH2.setAttribute('class', 'title');
  newH2.innerText = title;

  newP.innerText = description;

  newDiv.setAttribute('class', `notification ${type}`);
  newDiv.append(newH2, newP);

  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;

  document.body.append(newDiv);

  setInterval(() => {
    newDiv.style.visibility = 'hidden';
  }, 2200);
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

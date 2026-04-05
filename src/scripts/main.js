'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newParagraph = document.createElement('p');
  newDiv.classList.add('notification', type);
  newTitle.classList.add('title');
  newTitle.textContent = title;
  newParagraph.textContent = description;
  newDiv.append(newTitle, newParagraph);
  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`
  document.body.append(newDiv);
  setTimeout(() => {
    newDiv.style.display = 'none'
  }, 2000)
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

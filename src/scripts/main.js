'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification', type);
  messageBlock.style.top = posTop + 'px';
  messageBlock.style.right = posRight + 'px';

  const theTitle = document.createElement('h2');

  theTitle.classList.add('title');
  theTitle.innerHTML = title;

  const theDescription = document.createElement('p');

  theDescription.innerText = description;

  messageBlock.append(theTitle, theDescription);

  document.body.append(messageBlock);

  setTimeout(() => {
    messageBlock.style.visibility = 'hidden';
  }, '2000');
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

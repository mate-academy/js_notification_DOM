'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const messageBox = document.createElement('div');

  const setTitle = document.createElement('h2');
  const setDescription = document.createElement('p');

  setTitle.className = 'title';
  setTitle.style.minWidth = '300px';

  messageBox.className = 'notification';
  messageBox.classList.add(type);
  setTitle.textContent = title;
  setDescription.innerText = description;
  body.append(messageBox);
  messageBox.append(setTitle, setDescription);

  messageBox.style.position = 'absolute';
  messageBox.style.top = posTop + 'px';
  messageBox.style.right = posRight + 'px';

  setTimeout(() => {
    messageBox.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success'
);

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');

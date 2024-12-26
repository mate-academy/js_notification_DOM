'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const note = document.createElement('div');
  const noteTitle = document.createElement('h2');
  const message = document.createElement('p');

  note.classList.add('notification', type);
  noteTitle.innerText = title;
  noteTitle.classList.add('title');
  message.innerText = description;

  note.appendChild(noteTitle);
  note.appendChild(message);

  note.style.top = posTop + 'px';
  note.style.right = posRight + 'px';

  window.setTimeout(() => document.body.appendChild(note), 2000);
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

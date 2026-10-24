'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  div.setAttribute('class', `notification ${type}`);
  heading.setAttribute('class', 'title');

  heading.textContent = title;
  paragraph.textContent = description;

  div.append(heading);
  div.append(paragraph);

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  document.querySelector('body').append(div);

  setTimeout(() => {
    div.style.display = 'none';
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

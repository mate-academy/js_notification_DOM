'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const push = document.createElement('div');

  push.className = `notification ${type}`;
  document.body.append(push);

  const elTitle = document.createElement('h2');

  elTitle.innerText = title;
  elTitle.className = `title`;
  push.append(elTitle);

  const elDiscription = document.createElement('p');

  elDiscription.innerText = description;
  push.append(elDiscription);

  push.style.top = `${posTop}px`;
  push.style.right = `${posRight}px`;

  function removing() {
    push.style.display = 'none';
  }

  setTimeout(removing, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');

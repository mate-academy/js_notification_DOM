'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const boxH2 = document.createElement('h2');
  const boxP = document.createElement('p');

  boxH2.append(title);
  boxP.append(description);
  box.append(boxH2, boxP);
  document.body.append(box);

  box.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  box.classList.add('notification');
  box.classList.add(type);
  boxH2.classList.add('title');

  setTimeout(() => box.remove(), 2000);
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
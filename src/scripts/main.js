'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement(`div`);
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  p.innerText = description;
  h2.className = 'title';
  h2.innerText = title;
  div.appendChild(h2);
  div.appendChild(p);
  div.className = 'notification' + ' ' + type;
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  document.body.appendChild(div);

  const notifications = document.querySelectorAll('.notification');

  if (notifications.length > 1) {
    const lastNot = notifications[notifications.length - 2];
    const lastBottom = lastNot.offsetTop + lastNot.offsetHeight;

    div.style.top = `${lastBottom + 10}px`;
  } else {
    div.style.top = `${posTop}px`;
  }

  setTimeout(() => {
    div.remove();
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

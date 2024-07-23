'use strict';
const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  div.setAttribute('class', `notification ${type}`);
  document.body.append(div);
  const h2 = document.createElement('h2');
  h2.innerText = title;
  h2.setAttribute('class', 'title');
  div.append(h2);

  const p = document.createElement('p');
  p.innerText = description;
  div.append(p);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  h2.style.whiteSpace = 'nowrap';

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

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const innerH2 = document.createTextNode(title);
  const innerP = document.createTextNode(description);

  div.style.right = `${posRight}px`;
  div.style.top = `${posTop}px`;
  h2.setAttribute('class', 'title');
  div.setAttribute('class', 'notification');
  h2.appendChild(innerH2);
  p.appendChild(innerP);
  div.appendChild(h2);
  div.appendChild(p);

  document.body.append(div);

  if (type === 'success') {
    div.classList.add('success');
  }

  if (type === 'error') {
    div.classList.add('error');
  }

  if (type === 'warning') {
    div.classList.add('warning');
  }

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
  165,
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

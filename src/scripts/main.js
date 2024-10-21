'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = title;
  p.textContent = description;

  div.classList.add('notification');
  h2.classList.add('title');

  div.prepend(h2, p);
  body.append(div);

  const computedStyle = window.getComputedStyle(div);
  const width = parseInt(computedStyle.width);
  const padding =
    parseInt(computedStyle.paddingLeft) + parseInt(computedStyle.paddingRight);

  div.style.minWidth = `${width + padding}px`;
  div.style.right = `${posRight}px`;
  div.style.top = `${posTop}px`;

  switch (type) {
    case 'success':
      div.classList.add('success');
      break;

    case 'error':
      div.classList.add('error');
      break;

    case 'warning':
      div.classList.add('warning');
  }

  setTimeout(() => (div.style.display = 'none'), 2000);
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

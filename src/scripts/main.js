'use strict';

const pushNotification = (
  posTop = 0,
  posRight = 0,
  title,
  description,
  type,
) => {
  // write code here
  const div = document.createElement('div');

  div.setAttribute('class', 'notification');

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';
  div.classList.add(type);

  const h2 = document.createElement('h2');

  h2.setAttribute('class', 'title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  div.appendChild(h2);
  div.appendChild(p);

  document.body.appendChild(div);

  // setTimeout(() => {
  //   document.body.removeChild(div)
  // }, 2000);
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

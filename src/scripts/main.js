'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const validTypes = ['success', 'error', 'warning'];
  const finalType = validTypes.includes(type) ? type : 'default';

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList.add('notification', finalType);

  Object.assign(div.style, {
    top: posTop + 'px',
    right: posRight + 'px',
  });

  h2.classList.add('title');
  h2.textContent = title;
  p.innerHTML = description.replace(/\n/g, '<br>');

  div.appendChild(h2);
  div.appendChild(p);
  document.body.appendChild(div);

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

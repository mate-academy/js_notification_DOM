'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification');
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  const h2 = document.createElement('h2');

  h2.textContent = title;
  h2.classList.add('title');
  div.append(h2);

  const p = document.createElement('p');

  p.innerHTML = description.replace(/\n/g, '<br>');
  div.append(p);

  if (type === 'success') {
    div.classList.add('success');
  } else if (type === 'error') {
    div.classList.add('error');
  } else if (type === 'warning') {
    div.classList.add('warning');
  }

  document.body.append(div);

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

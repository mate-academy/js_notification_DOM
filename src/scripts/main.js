'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement(`div`);
  const h2 = document.createElement('h2');
  const text = document.createElement('p');

  div.className = `notification ${type}`;
  h2.className = 'title';

  h2.textContent = title;
  text.innerText = description;

  div.style.position = 'absolute';
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  div.appendChild(h2);
  div.appendChild(text);
  document.body.appendChild(div);

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

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const result = document.createElement('div');

  const header = document.createElement('h2');
  const desc = document.createElement('p');

  header.innerText = title;
  desc.innerText = description;
  result.style.width = '360px';

  result.classList.add('notification');
  result.classList.add(type);

  result.appendChild(header);
  result.appendChild(desc);

  document.body.append(result);

  result.style.position = 'fixed';
  result.style.top = posTop + 'px';

  result.style.left =
    document.body.clientWidth - result.offsetWidth - posRight + 'px';

  setTimeout(() => {
    document.body.removeChild(result);
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

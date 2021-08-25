'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');

  const div = document.createElement('div');

  if (type === 'success') {
    div.className = 'success';
    div.style.backgroundColor = '#c0ddb6';

    setTimeout(() => {
      div.style.display = 'none';
    }, 2000);
  }

  if (type === 'error') {
    div.className = 'error';
    div.style.backgroundColor = '#ecb5b1';

    setTimeout(() => {
      div.style.display = 'none';
    }, 4000);
  }

  if (type === 'warning') {
    div.className = 'warning';
    div.style.backgroundColor = '#f1e5bf';

    setTimeout(() => {
      div.style.display = 'none';
    }, 6000);
  }

  div.style.borderRadius = '10px';
  div.style.padding = '10px';
  div.style.display = 'block';
  div.style.position = 'fixed';
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  div.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  body.append(div);
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

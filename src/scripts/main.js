'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('notification');

  if (type === `warning`) {
    div.classList.add('warning');
    div.style.top = posTop + 'px';
    div.style.right = posRight + 'px';

    div.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
    `;
  }

  if (type === `error`) {
    div.classList.add('error');
    div.style.top = posTop + 'px';
    div.style.right = posRight + 'px';

    div.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
    `;
  }

  if (type === `success`) {
    div.classList.add('success');

    div.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
    `;
  }

  body.append(div);

  setTimeout(() => {
    div.style.display = 'none';
  }, 2000);
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

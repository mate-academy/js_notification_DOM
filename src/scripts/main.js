'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement(`div`);

  div.classList.add(`notification`, type);

  div.innerHTML = `
  <h2 class = "title">${title}</h2>
  <p>${description}</p>`;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  document.body.append(div);

  setTimeout(() => {
    div.hidden = true;
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

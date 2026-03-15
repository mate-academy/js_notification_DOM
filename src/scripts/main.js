'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const wrapper = document.createElement('div');

  wrapper.classList.add('notification');
  wrapper.classList.add(type);
  wrapper.style.position = 'absolute';
  wrapper.style.top = `${posTop}px`;
  wrapper.style.right = `${posRight}px`;

  const h = document.createElement('h2');

  h.className = 'title';
  h.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  wrapper.append(h, p);
  document.body.appendChild(wrapper);

  setTimeout(() => {
    wrapper.style.display = 'none';
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

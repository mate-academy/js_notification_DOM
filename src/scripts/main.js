'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const wrapper = document.createElement('div');

  wrapper.classList.add(type, 'notification');
  wrapper.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  const blockTitle = document.createElement('h2');

  blockTitle.textContent = title;
  blockTitle.classList.add('title');
  wrapper.append(blockTitle);

  const blockDescription = document.createElement('p');

  blockDescription.textContent = description;
  wrapper.append(blockDescription);

  document.body.append(wrapper);

  setTimeout(() => {
    wrapper.style.opacity = 0;
  }, 1000);
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

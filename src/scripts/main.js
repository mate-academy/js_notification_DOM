'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const wrapper = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementMessage = document.createElement('p');

  wrapper.style.top = `${posTop}px`;
  wrapper.style.right = `${posRight}px`;
  wrapper.classList = 'notification ' + type;

  elementTitle.classList = 'title';

  elementTitle.innerHTML = title;
  elementMessage.innerHTML = description;

  wrapper.append(elementTitle);
  wrapper.append(elementMessage);

  setTimeout(() => document.querySelector('body').append(wrapper), 2000);
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

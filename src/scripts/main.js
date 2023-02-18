'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const wrapper = document.createElement('div');

  wrapper.style.position = 'absolute';

  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'relative';

  notification.insertAdjacentHTML('afterBegin',
    `<h2 class = 'title'>${title}</h2><p>${description}</p>`);

  wrapper.append(notification);
  document.body.append(wrapper);
  wrapper.style.top = posTop + 'px';
  wrapper.style.right = posRight + 'px';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'warning');

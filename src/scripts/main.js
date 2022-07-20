'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const infoBlock = document.createElement('div');
  const titleInfo = document.createElement('h2');
  const descriptionInfo = document.createElement('p');

  infoBlock.classList.add('notification', type);
  titleInfo.classList.add('title');

  titleInfo.textContent = title;
  descriptionInfo.textContent = description;

  infoBlock.append(titleInfo, descriptionInfo);

  infoBlock.style.top = posTop + 'px';
  infoBlock.style.right = posRight + 'px';

  document.body.append(infoBlock);

  setTimeout(() => {
    infoBlock.remove();
  }, 3000);
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

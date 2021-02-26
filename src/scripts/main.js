'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const root = document.createElement('div');

  root.classList = `notification ${type}`;
  root.style.top = posTop + 'px';
  root.style.right = posRight + 'px';

  const rootTitle = document.createElement('h2');

  rootTitle.className = 'title';
  rootTitle.innerText = title;

  const rootDescription = document.createElement('p');

  rootDescription.innerText = description;

  root.append(rootTitle, rootDescription);
  document.body.append(root);

  setTimeout(() => {
    root.remove();
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

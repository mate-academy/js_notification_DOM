'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementDiv = document.createElement('div');
  const elementH2 = document.createElement('h2');
  const elementP = document.createElement('p');

  elementDiv.className = `notification ${type}`;
  elementH2.className = `title`;

  elementH2.innerText = title;
  elementP.innerText = description;

  elementDiv.append(elementH2);
  elementDiv.append(elementP);

  elementDiv.style.width = 'max-content';
  elementDiv.style.top = posTop + 'px';
  elementDiv.style.right = posRight + 'px';

  document.body.append(elementDiv);

  const timerId = setInterval(() => {}, 0);

  setTimeout(() => {
    clearInterval(timerId);
    elementDiv.remove();
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

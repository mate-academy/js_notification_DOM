'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const content = document.querySelector('body');
  const message = document.createElement('div');
  const headline = document.createElement('h2');
  const paragraph = document.createElement('p');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.boxSizing = 'content-box';
  message.className = `notification ${type}`;
  headline.className = 'title';
  headline.innerText = title;
  paragraph.innerText = description;

  message.append(headline, paragraph);
  content.append(message);

  setTimeout(() => {
    message.remove();
  }, '2000');
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

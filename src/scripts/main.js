'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const textTitle = document.createElement('h2');
  const textParagraph = document.createElement('p');
  const textBody = document.createElement('div');

  textBody.className = `notification ${type}`;
  textBody.style.boxSizing = 'content-box';
  textBody.style.top = posTop + 'px';
  textBody.style.right = posRight + 'px';
  document.body.append(textBody);

  textTitle.className = 'title';
  textTitle.textContent = title;
  textBody.append(textTitle);

  textParagraph.textContent = description;
  textBody.append(textParagraph);

  setTimeout(() => textBody.remove(), 2000);
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

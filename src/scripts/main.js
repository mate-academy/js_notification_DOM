'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const firstParagraph = document.createElement('p');
  const secondParagraph = document.createElement('p');

  message.classList = `notification ${type}`;
  message.style.top = posTop + 'px';
  message.style.rigth = posRight + 'px';
  message.style.boxSizing = 'content-box';

  const index = description.indexOf('.');
  const firstPathDescription = description.slice(0, index + 1);
  const secondPathDescription = description.slice(index + 1);

  h2.className = 'title';
  h2.textContent = title;
  firstParagraph.textContent = firstPathDescription;
  secondParagraph.textContent = secondPathDescription;

  firstParagraph.style.marginBottom = '0px';
  secondParagraph.style.marginTop = '0px';

  message.append(h2);
  message.append(firstParagraph);
  message.append(secondParagraph);
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
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

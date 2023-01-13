'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const body = document.querySelector('body');
  const heading = document.createElement('h2');
  const descr = document.createElement('p');

  body.append(element);

  element.style.right = posRight + 'px';
  element.style.top = posTop + 'px';

  element.className = `notification + ${type}`;

  heading.textContent = title;
  heading.className = 'title';
  element.insertAdjacentElement('afterbegin', heading);

  descr.textContent = description;
  heading.insertAdjacentElement('afterend', descr);

  setTimeout(function() {
    element.remove();
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

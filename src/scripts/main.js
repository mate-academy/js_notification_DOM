'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.body;
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const desc = document.createElement('p');

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  h2.classList = `title`;
  h2.innerHTML = `${title}`;
  desc.innerHTML = `${description}`;
  div.classList = `notification ${type}`;
  div.append(h2);
  div.append(desc);

  const massageBlock = setTimeout(() => {
    body.append(div);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 2000);

  return massageBlock;
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

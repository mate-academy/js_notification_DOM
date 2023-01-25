'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');

  div.className = 'notification';
  div.classList.add(type);
  h2.className = 'title';

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  h2.innerHTML = title;

  div.insertAdjacentHTML('afterbegin', `
    <p>
    ${description.slice(0, 16)}
    <br>
    ${description.slice(16)}
    <p/>
  `);

  div.prepend(h2);
  document.body.append(div);

  setTimeout(() => div.remove(), 2000);
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

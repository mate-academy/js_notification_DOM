'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  let body = document.querySelector('body')

  let notifification = document.createElement('div')
  let h2 = document.createElement('h2')
  notifification.append(h2)
  h2.textContent = title;
  h2.className = 'title'
  let p = document.createElement('p')
  p.textContent = description
  notifification.append(p)
  notifification.style.top = posTop +'px';
  notifification.style.right = posRight +'px';

  notifification.className = `notification + ${type}`

  body.append(notifification)

  setTimeout(() => notifification.remove(), 2000)

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

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const body = document.querySelector('body');

  div.className = 'notification';
  div.classList.toggle(type);
  h2.className = 'title';

  h2.innerHTML = title;
  p.innerHTML = description;

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  body.append(div);
  div.append(h2);
  div.append(p);

  setTimeout(function() {
    const hide = document.querySelectorAll('.notification');
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.visibility = 'hidden';
    }
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example. <br> '
  + 'Notification should contain title and description.', 'warning');

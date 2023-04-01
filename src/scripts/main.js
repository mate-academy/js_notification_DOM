'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  helper(type[0]);

  helper(type[1]);

  helper(type[2]);

  function helper(divs) {
    const element = document.createElement('div');

    element.classList = `notification ${type}`;

    const h2 = document.createElement('h2');

    h2.className = 'title';
    h2.textContent = title;
    element.append(h2);

    const p = document.createElement('p');

    p.textContent = description;
    element.append(p);

    body.append(element);

    element.style.position = 'absolute';
    element.style.top = `${posTop}px`;
    element.style.right = `${posRight}px`;
    element.style.width = '400px';

    setTimeout(() => {
      element.remove();
    }, 2000);
  }
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

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const par = document.body;

  const divElem = document.createElement('div');

  divElem.className = `notification ${type}`;
  par.appendChild(divElem);

  divElem.setAttribute('style',
    `top: ${
      posTop
    }px; right: ${
      posRight
    }px; box-sizing: content-box;`);

  const titles = document.createElement('h2');

  titles.innerHTML = title;
  divElem.appendChild(titles);

  const paragraph = document.createElement('p');

  paragraph.innerHTML = description;
  divElem.appendChild(paragraph);
  setTimeout(function() {divElem.remove();}, 1000);
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

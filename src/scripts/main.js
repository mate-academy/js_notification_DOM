'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementMessage = document.createElement('div');

  elementMessage.classList.add(type, 'notification');

  function createNewElement(element, textOfElement) {
    const creatElem = document.createElement(element);

    creatElem.textContent = textOfElement;

    elementMessage.append(creatElem);

    return creatElem;
  }

  const titleElement = createNewElement('h2', title);

  titleElement.className = 'title';

  createNewElement('p', description);

  document.body.append(elementMessage);

  // console.log(parseFloat(getComputedStyle(elementMessage).right));

  elementMessage.style.right
    = `${parseFloat(getComputedStyle(elementMessage).right) + posRight}px`;

  elementMessage.style.top
    = `${parseFloat(getComputedStyle(elementMessage).top) + posTop}px`;
  elementMessage.style.boxSizing = 'content-box';

  setTimeout(() => {
    elementMessage.remove();
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

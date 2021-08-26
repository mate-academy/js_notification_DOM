'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  document.body.append(block);
  block.className = `notification ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.style.width = 'auto';
  block.style.height = '130px';

  const titleBlock = document.createElement('h2');

  block.append(titleBlock);
  titleBlock.textContent = `${title}`;
  titleBlock.classList.add('title');

  const descriptionBlock = document.createElement('p');

  block.append(descriptionBlock);
  descriptionBlock.textContent = `${description}`;

  const deleteElement = (i) => {
    const displayNone = document.body.children[i].style.display = 'none';

    return displayNone;
  };

  for (let i = 2; i < 5; i++) {
    setTimeout(deleteElement, 1000 * `${i}`, `${i}`);
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

'use strict';

const pushNotification = (top, right, title, description, type) => {
  const container = document.createElement('div');
  const titleElement = document.createElement('h2');
  const paragraph = document.createElement('p');

  titleElement.setAttribute('class', 'title');
  titleElement.innerText = title;
  titleElement.style.fontWeight = '600';

  paragraph.innerText = description;

  container.setAttribute('class', `notification ${type}`);
  container.append(titleElement);
  container.append(paragraph);

  container.style.backgroundColor = '#f4e5ba';
  container.style.borderRadius = '5px';
  container.style.top = top + 'px';
  container.style.right = right + 'px';
  container.style.display = 'block';

  document.body.append(container);

  setInterval(() => {
    container.style.display = 'none';
  }, 2000);
};

pushNotification(10, 10, 'Title',
  'This is example of result. Notification should'
  + ' contain title and description',
  'error');

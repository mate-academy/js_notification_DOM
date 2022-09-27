'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}">
      <h2 class="title">
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>
  `);

  const message = document.querySelector('.notification');
  const titleMessage = document.querySelector('.title');

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  // used this because font-size: 20px is too large
  titleMessage.style.fontSize = 18 + 'px';

  setTimeout(removeElem, 2000, message);
};

function removeElem(elem) {
  elem.remove();
}

pushNotification(10, 10, 'Title of Success message',
  'Message example.<br>'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.<br>'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.<br>'
  + 'Notification should contain title and description.', 'warning');

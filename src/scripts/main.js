'use strict';

class Toastr {
  toastr = null;

  static TOASTR_TYPE_SUCCESS = 'success';
  static TOASTR_TYPE_WARNING = 'warning';
  static TOASTR_TYPE_ERROR = 'error';

  #createToastr(type = '', options) {
    const toastr = document.createElement('div');

    toastr.classList.add('notification', type);
    toastr.style.top = `${options.position.top}px`;
    toastr.style.right = `${options.position.right}px`;

    this.toastr = toastr;

    return this;
  }

  #createTitle(title) {
    const titleEl = document.createElement('h3');

    titleEl.textContent = title;

    this.toastr.append(titleEl);

    return this;
  }

  #createMessage(message) {
    const messageEl = document.createElement('p');

    messageEl.textContent = message;

    this.toastr.append(messageEl);

    return this;
  }

  #mountToastr() {
    document.body.append(this.toastr);
  }

  success({ title, message, options }) {
    this.#createToastr(Toastr.TOASTR_TYPE_SUCCESS, options)
      .#createTitle(title)
      .#createMessage(message)
      .#mountToastr();
  }

  warning({ title, message, options }) {
    this.#createToastr(Toastr.TOASTR_TYPE_WARNING, options)
      .#createTitle(title)
      .#createMessage(message)
      .#mountToastr();
  }

  error({ title, message, options }) {
    this.#createToastr(Toastr.TOASTR_TYPE_ERROR, options)
      .#createTitle(title)
      .#createMessage(message)
      .#mountToastr();
  }
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const toastr = new Toastr();

  toastr[type]({
    title,
    message: description,
    options: {
      position: { top: posTop, right: posRight },
    },
  });
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);

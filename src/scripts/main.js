'use strict';

const pushNotification = (top, right, title, description, type) => {
  const note = document.createElement('div');

  note.style.top = top + 'px';
  note.style.right = right + 'px';
  note.classList.add(type);
  note.classList.add('notification');

  const noteTitle = document.createElement('h2');

  noteTitle.innerText = title;

  const noteText = document.createElement('p');

  noteText.innerText = description;
  document.body.append(note);
  note.append(noteTitle);
  note.append(noteText);
  setTimeout(() => note.remove(), 2000);
};

pushNotification(20, 100, 'Success alert', 'Everything is ok', 'success');

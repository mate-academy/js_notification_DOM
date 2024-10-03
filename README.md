1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://AlNeon.github.io/js_notification_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Create a notification

To inform the user about the success of the operation, or any errors, websites usually use messages that appear for a while on the screen.

Your task: Create function `pushNotification`, which takes coordinates of the message, title, description, and type
(success, error and warning). `pushNotification` creates an element to display the message, appends it to the document, and hides it from the DOM after 2 seconds.
Do not write any CSS styles or HTML code in this task. You should modify only `main.js` file.

Implementation tips:
- Print three messages: `success`, `error`, `warning` (call methods already exist in `main.js` file);
- The message is block element with class `notification` + class which depends on the input parameter type (`success`, `error`, `warning`);
- The message should have a title with class `title` (prefer `h2` element);
- The message should have description (prefer tag `p`).

Hint: use [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) for execute a function or specified piece of code once the timer expires.

It's an expected result of your job:
![Result](./src/images/result.png)

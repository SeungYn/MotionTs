import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      '<div>1</div>',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      'video title',
      'https://www.youtube.com/embed/dHrI-_xq1Vo'
    );

    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'note body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo title', 'Todo Item');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('.new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOncloseListenr(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListenr(() => {
        dialog.removeFrom(document.body);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);

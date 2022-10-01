export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement('template');
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'agterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

import { BaseComponent } from '../component';
import { Composable } from '../page/page';

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<section class="dialog">
		<button class="close">&times;</button>
		<div id="dialog__body"></div>
		<button class="dialog_submit">ADD</button>
	</section>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    const submitBtn = this.element.querySelector(
      '.dialog__submit'
    )! as HTMLElement;

    closeBtn.onclick = () => {
      this.closeListener && this.closeListenr();
    };

    submitBtn.onclick = () => {
      this.submitListener && this.submitListenr();
    };
  }
  setOncloseListenr(listener: OnListener) {
    this.closeListener = listener;
  }
  setOnsubmitListenr(listener: OnListener) {
    this.submitListener = listener;
  }
}

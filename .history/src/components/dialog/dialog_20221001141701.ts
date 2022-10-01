import { BaseComponent } from '../component';
import { Composable } from '../page/page';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnListener;
  submitListener?: OnListener;
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
      this.closeListener && this.closeListener();
    };

    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }
  setOncloseListenr(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnsubmitListenr(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
}

import { BaseComponent } from '../component';

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
  }
}

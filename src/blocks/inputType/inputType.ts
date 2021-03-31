import { IResponseInputType } from '../../Interfaces';

type TInputTypeProps = {
  element: HTMLElement;
  callback: (arg: IResponseInputType) => void;
};

export class InputType {
  element: HTMLElement;
  callback: (arg: IResponseInputType) => void;
  activeElement: string | null;

  constructor({ element, callback }: TInputTypeProps) {
    this.element = element;
    this.callback = callback;
    this.activeElement = null;
  }
  init() {
    const aciveEls = this.element.querySelectorAll(
      'input:checked',
    ) as NodeListOf<HTMLInputElement>;
    aciveEls.forEach((el) => (el.checked = false));
    const handle = this.handleClick.bind(this);
    this.element.addEventListener('click', handle);
  }
  change() {
    const type = 'inputType';
    const value = this.activeElement;
    this.callback({ type, value });
  }

  handleClick(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target.classList.contains('input-type__input')) {
      const name = target.dataset.name;
      if (name !== undefined) {
        this.activeElement = name;
        this.change();
      }
    }
  }
  public getValue() {
    return this.activeElement;
  }
}

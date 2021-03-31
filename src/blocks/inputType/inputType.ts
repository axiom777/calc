interface TResponse {
  type: string;
  value: string | null;
}

type TInputTypeProps = {
  element: HTMLElement;
  callback: (arg: TResponse) => void;
};

class InputType {
  element: HTMLElement;
  callback: (arg: TResponse) => void;
  activeElement: string | null;

  constructor({ element, callback }: TInputTypeProps) {
    this.element = element;
    this.callback = callback;
    this.activeElement = null;
  }
  init() {
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
}

{
  const element = document.querySelector('.calc__house-types') as HTMLElement;
  const callback = ({ type, value }: TResponse) => console.log(type, value);

  const inputType = new InputType({ element, callback });
  inputType.init();
}

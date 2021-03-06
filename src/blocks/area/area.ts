import { IResponseArea } from '../../Interfaces';

type TAreaProps = {
  element: HTMLInputElement;
  callback: (arg: IResponseArea) => void;
};

export class Area {
  readonly element: HTMLInputElement;
  readonly callback: TAreaProps['callback'];
  prevValue: string;

  constructor({ element, callback }: TAreaProps) {
    this.element = element;
    this.callback = callback;
    this.prevValue = '0';
  }

  init() {
    this.element.value = '';
    const handle = this.handleInput.bind(this);
    this.element.addEventListener('input', handle);
  }

  handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const split = value.split('.');

    let firstZerro = target.value[0] === '0';
    if (firstZerro) {
      while (firstZerro === true && target.value.length > 1) {
        target.value = target.value.substr(1);
        firstZerro = target.value[0] === '0';
      }
    }
    if (split.length > 1 && split[1].length > 2) {
      target.value = target.value.substr(0, target.value.length - 1);
    }
    if (split.length > 0 && split[0].length > 3) {
      target.value = this.prevValue;
      return;
    }
    if (isNaN(Number(value))) {
      target.value = this.prevValue;
      return;
    }
    value[0] === '-' && (target.value = target.value.substr(1));

    this.prevValue = Math.abs(Number(value)).toString();
    this.change();
  }

  public getValue(): number {
    return parseFloat(this.prevValue);
  }

  change() {
    const type: string = 'area';
    const value = parseFloat(this.prevValue);
    this.callback({ type, value });
  }
}

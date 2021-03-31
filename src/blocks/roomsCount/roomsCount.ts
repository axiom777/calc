import { IResponseRoomsCount } from '../../Interfaces';

type TRoomsCountProps = {
  element: HTMLElement;
  callback: (arg: IResponseRoomsCount) => void;
};

export class RoomsCount {
  element: HTMLElement;
  callback: (arg: IResponseRoomsCount) => void;
  value: number;

  constructor({ element, callback }: TRoomsCountProps) {
    this.element = element;
    this.callback = callback;
    this.value = 0;
  }

  init() {
    const handle = this.handleClick.bind(this);
    this.element.addEventListener('click', handle);
  }
  change() {
    const type = 'roomsCount';
    const value = this.value;
    this.callback({ type, value });
  }

  handleClick(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target.classList.contains('rooms-count__input')) {
      const value = target.dataset.name;
      if (!value) return;
      this.value = parseInt(value);
      this.change();
    }
  }
  public getValue() {
    return this.value;
  }
}

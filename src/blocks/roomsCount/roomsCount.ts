import { IResponseRoomsCount } from '../../Interfaces';

type TRoomsCountProps = {
  element: HTMLElement;
  callback: (arg: IResponseRoomsCount) => void;
};

export class RoomsCount {
  element: HTMLElement;
  callback: (arg: IResponseRoomsCount) => void;
  value: number;
  handleClickBind: (this: HTMLElement, ev: MouseEvent) => any;
  isActive: boolean;

  constructor({ element, callback }: TRoomsCountProps) {
    this.element = element;
    this.callback = callback;
    this.value = 0;
    this.isActive = true;
    this.handleClickBind = this.handleClick.bind(this);
  }

  init() {
    this.events('add');
  }

  events(type: 'add' | 'remove') {
    if (type === 'add') {
      this.element.addEventListener('click', this.handleClickBind, true);
    }
    if (type === 'remove') {
      this.element.removeEventListener('click', this.handleClickBind, true);
    }
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
  enable() {
    this.isActive = true;
    this.element.classList.remove('rooms-count_disabled');
    this.events('add');
  }
  disable() {
    this.isActive = false;
    !this.element.classList.contains('rooms-count_disabled') &&
      this.element.classList.add('rooms-count_disabled');
    this.events('remove');
  }

  public getValue() {
    return this.value;
  }
}

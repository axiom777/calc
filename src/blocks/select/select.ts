import { IResponseSelect } from '../../Interfaces';

type TSelectProps = {
  element: HTMLElement;
  callback: (arg: IResponseSelect) => void;
  typeName: string;
};

export class Select {
  readonly element: HTMLElement;
  readonly typeName: string;
  readonly callback: TSelectProps['callback'];
  isOpen: boolean;
  isActive: boolean;
  valueElement: HTMLElement;
  listElement: HTMLElement;
  value: string | null;
  bindClick: (this: HTMLElement, ev: MouseEvent) => any | undefined;
  bindColaple: (this: HTMLElement, ev: MouseEvent) => any | undefined;

  constructor({ element, callback, typeName }: TSelectProps) {
    this.element = element;
    this.typeName = typeName;
    this.callback = callback;
    this.value = null;
    this.isOpen = false;
    this.isActive = true;
    this.valueElement = element.querySelector('.select__value') as HTMLElement;
    this.listElement = element.querySelector('.select__list') as HTMLElement;
    this.bindClick = this.handleClick.bind(this);
    this.bindColaple = this.colapse.bind(this);
  }

  init() {
    this.events('add');
  }
  events(type: 'add' | 'remove') {
    if (type === 'add') {
      this.element.addEventListener('click', this.bindClick, true);
      this.element.addEventListener('mouseleave', this.bindColaple, true);
    }
    if (type === 'remove') {
      this.element.removeEventListener('click', this.bindClick, true);
      this.element.removeEventListener('mouseleave', this.bindColaple, true);
    }
  }
  colapse() {
    this.isOpen = false;
    this.element.classList.remove('select_active');
  }

  change() {
    const type = this.typeName;
    const value = this.value;
    this.callback({ type, value });
  }

  toggle() {
    this.isOpen
      ? this.element.classList.remove('select_active')
      : this.element.classList.add('select_active');
    this.isOpen = !this.isOpen;
  }

  handleClick(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    this.toggle();
    if (target.classList.contains('select__item')) {
      const value = target.dataset.name;
      if (value) {
        this.valueElement.innerHTML = target.innerHTML;
        this.value = value;
        !this.valueElement.classList.contains('select__value_selected') &&
          this.valueElement.classList.add('select__value_selected');
        this.change();
      }
    }
  }
  public getValue() {
    return this.value;
  }

  enable() {
    this.isActive = true;
    this.element.classList.remove('select_disabled');
    this.events('add');
  }

  disable() {
    this.isActive = false;
    this.element.classList.add('select_disabled');
    this.events('remove');
  }
}

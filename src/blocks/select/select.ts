interface IResponseSelect {
  type: string;
  value: string | null;
}
type TSelectProps = {
  element: HTMLElement;
  callback: (arg: IResponseSelect) => void;
  typeName: string;
};

class Select {
  readonly element: HTMLElement;
  readonly typeName: string;
  readonly callback: TSelectProps['callback'];
  isOpen: boolean;
  valueElement: HTMLElement;
  listElement: HTMLElement;
  value: string | null;

  constructor({ element, callback, typeName }: TSelectProps) {
    this.element = element;
    this.typeName = typeName;
    this.callback = callback;
    this.value = null;
    this.isOpen = false;
    this.valueElement = element.querySelector('.select__value') as HTMLElement;
    this.listElement = element.querySelector('.select__list') as HTMLElement;
  }

  init() {
    const handle = this.handleClick.bind(this);
    const colapse = this.colapse.bind(this);
    this.element.addEventListener('click', handle);
    this.element.addEventListener('mouseleave', colapse);
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
    const target = event?.target as HTMLElement;
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
}

const selects = document.querySelectorAll('.select') as NodeList;
{
  const typeElement = selects[0] as HTMLElement;
  const callback = ({ type, value }: IResponseSelect) =>
    console.log(type, value);
  const roomType = new Select({
    element: typeElement,
    typeName: 'roomType',
    callback,
  });
  roomType.init();
}
{
  const typeElement = selects[1] as HTMLElement;
  const callback = ({ type, value }: IResponseSelect) =>
    console.log(type, value);
  const repareType = new Select({
    element: typeElement,
    typeName: 'repareType',
    callback,
  });
  repareType.init();
}

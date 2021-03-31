interface TResponseRoomsCount {
  type: string;
  value: number;
}

type TRoomsCountProps = {
  element: HTMLElement;
  callback: (arg: TResponseRoomsCount) => void;
};

class RoomsCount {
  element: HTMLElement;
  callback: (arg: TResponseRoomsCount) => void;
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
}

const counter = document.querySelector('.rooms-count') as HTMLElement;
{
  const callback = ({ type, value }: TResponseRoomsCount) =>
    console.log(type, value);
  const roomsCount = new RoomsCount({ element: counter, callback });
  roomsCount.init();
}

import { Area } from '../blocks/area/area';
import { InputType } from '../blocks/inputType/inputType';
import { RoomsCount } from '../blocks/roomsCount/roomsCount';
import { Select } from '../blocks/select/select';
import { TComplexData } from '../Interfaces';

type TCalculatorProps = {
  element: HTMLElement;
  callback: (arg: any) => void;
};

/*
 *type TResponseTypes = {
 *  type: string;
 *  value: number | string | null;
 *};
 */

export class Calculator {
  public area: Area;
  callback: (arg: any) => void;
  public inputType: InputType;
  public roomsCount: RoomsCount;
  public roomType: Select;
  public repareType: Select;

  constructor({ element, callback: call }: TCalculatorProps) {
    this.callback = call;
    const callback = this.onChangeProps.bind(this);
    this.area = new Area({
      element: element.querySelector('.area__input') as HTMLInputElement,
      callback,
    });
    this.inputType = new InputType({
      element: element.querySelector('.calc__house-types') as HTMLElement,
      callback,
    });
    this.roomsCount = new RoomsCount({
      element: element.querySelector('.rooms-count') as HTMLElement,
      callback,
    });
    const selects = element.querySelectorAll('.select') as NodeList;
    this.roomType = new Select({
      element: selects[0] as HTMLElement,
      callback,
      typeName: 'roomType',
    });
    this.repareType = new Select({
      element: selects[1] as HTMLElement,
      callback,
      typeName: 'roomType',
    });
  }
  init() {
    this.repareType.init();
    this.roomType.init();
    this.roomsCount.init();
    this.inputType.init();
    this.area.init();
  }

  onChangeProps() {
    const complexData = this.getComlexData();
    this.callback(complexData);
  }

  getComlexData(): TComplexData {
    const area = this.area.getValue();
    const houseType = this.inputType.getValue() as TComplexData['houseType'];
    const rooms = this.roomsCount.getValue();
    const roomType = this.roomType.getValue() as TComplexData['roomType'];
    const repareType = this.repareType.getValue() as TComplexData['repareType'];
    return {
      area,
      houseType,
      rooms,
      roomType,
      repareType,
    };
  }
}

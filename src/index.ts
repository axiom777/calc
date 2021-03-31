import './blocks/inputType/inputType.scss';
import './index.scss';
import './blocks/select/select.scss';
import './blocks/roomsCount/roomsCount.scss';
import './blocks/area/area.scss';

import { Calculator } from './Calculator/Calculator';

/*
 *import './blocks/inputType/inputType';
 *import './blocks/select/select';
 *import './blocks/roomsCount/roomsCount';
 *import './blocks/area/area';
 *import './Calculator/Calculator';
 */

const calcElement = document.querySelector('.calc') as HTMLElement;

const callback = (complexData: any) => {
  console.log(complexData);
};
const calculator = new Calculator({ element: calcElement, callback });
calculator.init();

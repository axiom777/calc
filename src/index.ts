import './blocks/inputType/inputType.scss';
import './index.scss';
import './blocks/select/select.scss';
import './blocks/roomsCount/roomsCount.scss';
import './blocks/area/area.scss';

import { Calculator } from './Calculator/Calculator';

import { configRoom, configFlat } from './config';
import { TComplexData } from './Interfaces';

/*
 *import './blocks/inputType/inputType';
 *import './blocks/select/select';
 *import './blocks/roomsCount/roomsCount';
 *import './blocks/area/area';
 *import './Calculator/Calculator';
 */

const calcElement = document.querySelector('.calc') as HTMLElement;
const errors = calcElement.querySelector('.errors') as HTMLElement;
const result = calcElement.querySelector('.result') as HTMLElement;

const showErrors = (errorsArr: string[]) => {
  errorsArr.forEach((e) => {
    errors.innerHTML += `<div>${e}</div>`;
  });
};

const showResult = (complexData: TComplexData) => {
  const { houseType, area, roomType, repareType } = complexData;
  let price = 0;
  let materialPrice = 0;

  if (houseType === 'room' && repareType !== null && roomType !== null) {
    price = configRoom[repareType][roomType].remont;
    materialPrice = configRoom[repareType][roomType].materials;
  }
  if (repareType !== null) {
    if (
      houseType === 'second' ||
      (houseType === 'new' && repareType !== null)
    ) {
      price = configFlat[houseType][repareType].remont;
      materialPrice = configFlat[houseType][repareType].materials;
    }
  }
  result.innerHTML = `
<div>Стоимость ремонта 1кв. метра = ${price}</div>
<div>Стоимость материлов на 1кв. метр = ${materialPrice}</div>
<div>Стоимость ремонта для площади ${area}кв. метров = ${price * area}</div>
<div>Стоимость материлов для  ${area}кв. метров = ${materialPrice * area}</div>
`;
};

const callback = (complexData: TComplexData) => {
  const { houseType, area, roomType, repareType } = complexData;
  const errorsArr = [];
  errors.innerHTML = '';
  result.innerHTML = '';

  if (houseType === null) {
    errorsArr.push('Укажите где будет ремонт');
  }

  if (area === 0) {
    errorsArr.push('Укажите размер ремонтируемой площади');
  }

  if (houseType === 'new' || houseType === 'second') {
    calculator.roomType.disable();
    calculator.roomsCount.enable();
  }

  if (houseType === 'room') {
    if (roomType === null) {
      errorsArr.push('Укажите тип помещения');
    }
    calculator.roomType.enable();
    calculator.roomsCount.disable();
  }

  if (repareType === null) {
    errorsArr.push('Укажите помещение тип Ремонта');
  }

  errorsArr && showErrors(errorsArr);
  errorsArr.length ===0 &&showResult(complexData);
};

const calculator = new Calculator({ element: calcElement, callback });
calculator.init();

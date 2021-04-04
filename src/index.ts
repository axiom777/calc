import './blocks/inputType/inputType.scss';
import './index.scss';
import './blocks/select/select.scss';
import './blocks/roomsCount/roomsCount.scss';
import './blocks/area/area.scss';
import './blocks/result/result.scss';

import { Calculator } from './Calculator/Calculator';

import { configRoom, configFlat, TRepare } from './config';
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
const results = calcElement.querySelectorAll(
  '.result .result__value',
) as NodeListOf<HTMLElement>;

const [priceOfWrok, priceOfMaterials, workDays] = results;

const showErrors = (errorsArr: string[]) => {
  errorsArr.forEach((e) => {
    errors.innerHTML += `<div>${e}</div>`;
  });
};

const getDays = (
  area: number,
  days: TRepare['days'],
  stepConfig: string,
  rooms: number,
): number => {
  const areaKeys = Object.keys(days as Object).sort(
    (a, b) => Number(a) - Number(b),
  );
  let key: string = '';
  for (let i = 0; i < areaKeys.length; i++) {
    if (area <= Number(areaKeys[i])) {
      key = areaKeys[i];
      break;
    }
  }
  if (key !== '') return days![key];
  const maxArea = areaKeys[areaKeys.length - 1];
  const remaindArea = area - Number(maxArea);
  const maxDays = days![maxArea];
  const [areaStep, daysStep] = stepConfig.split('-').map((e) => Number(e));

  return (
    Number(maxDays + daysStep) + Math.floor(remaindArea / (areaStep / daysStep))
  );
};

const showResult = (complexData: TComplexData) => {
  const { houseType, area, roomType, repareType, rooms } = complexData;
  let price = 0;
  let materialPrice = 0;
  let repare: TRepare;
  let days;
  let stepConfig;

  if (houseType === 'room' && repareType !== null && roomType !== null) {
    repare = configRoom[repareType][roomType];
    price = repare.remont;
    materialPrice = repare.materials;
    repare.hasOwnProperty('days') && (days = repare.days);
    repare.hasOwnProperty('stepConfig') && (stepConfig = repare.stepConfig);
  }
  if (repareType !== null) {
    if (
      houseType === 'second' ||
      (houseType === 'new' && repareType !== null)
    ) {
      repare = configFlat[houseType][repareType];
      price = repare.remont;
      materialPrice = repare.materials;
      repare.hasOwnProperty('days') && (days = repare.days);
      repare.hasOwnProperty('stepConfig') && (stepConfig = repare.stepConfig);
    }
  }
  let totalDays = 0;
  if (rooms !== 0 && houseType !== 'room') {
    totalDays = repare!.rooms![rooms - 1];
  } else {
    totalDays = getDays(area, days, stepConfig as string, rooms);
  }

  priceOfWrok.innerHTML = (price * area).toString();
  priceOfMaterials.innerHTML = (materialPrice * area).toString();
  workDays.innerHTML = totalDays.toString();
};

const callback = (complexData: TComplexData) => {
  console.log(complexData);
  const { houseType, area, roomType, repareType } = complexData;
  const errorsArr = [];
  errors.innerHTML = '';
  priceOfWrok.innerHTML = '0';
  priceOfMaterials.innerHTML = '0';
  workDays.innerHTML = '0';

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
  errorsArr.length === 0 && showResult(complexData);
};

const calculator = new Calculator({ element: calcElement, callback });
calculator.init();

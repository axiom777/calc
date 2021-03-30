(() => {
  const input = document.querySelector('.area__input');
  if (!input) return;
  let prevValue: string = '0';
  const handleInput = (e: Event) => {
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
      target.value = prevValue;
      return;
    }
    if (isNaN(Number(value))) {
      target.value = prevValue;
      return;
    }
    value[0] === '-' && (target.value = target.value.substr(1));

    prevValue = value;
  };

  input.addEventListener('input', handleInput);
})();

const selects = document.querySelectorAll('.select');
selects.length > 0 &&
  selects.forEach((select) => {
    const value = select.querySelector('.select__value');
    const list = select.querySelector('.select__list');
    const items = list?.querySelectorAll('.select__item');
    if (!value || !list || items?.length === 0) {
      console.error('Select not contains selectors');
      return;
    }

    //toggle class
    const handleSelectToggle = (e: Event) => {
      const target = e.target as HTMLElement;
      select.classList.toggle('select_active');

      if (target.classList.contains('select__item')) {
        value.innerHTML = target.innerHTML;
        !value.classList.contains('select__value_selected') &&
          value.classList.add('select__value_selected');
      }
    };
    select.addEventListener('mouseleave', () => {
      select.classList.remove('select_active');
    });

    select.addEventListener('click', handleSelectToggle);
  });

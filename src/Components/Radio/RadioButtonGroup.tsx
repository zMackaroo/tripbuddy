/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
import { IRadioButtonGroup } from '@Utils/Types';

import { Store } from '@Utils/Context/Context';

function RadioButtonGroup({ name, className, options }: IRadioButtonGroup) {
  const { updateStore, geminiParamsConfig }: any = useContext(Store);
  const [activeItem, setActiveItem] = useState(geminiParamsConfig[name] || '');

  const handleOnClick = (item: string) => {
    setActiveItem(item);
    updateStore({
      geminiParamsConfig: {
        ...geminiParamsConfig,
        [name]: item,
      },
    });
  };

  return (
    <div className={className}>
      {options.map(({ icon, title, itemClassName, activeClassName }) => (
        <div
          key={title}
          className={`${itemClassName || 'selection__item'} ${
            activeItem === title ? activeClassName || 'active' : ''
          }`}
          onClick={() => handleOnClick(title)}
        >
          <i className={`fa-solid ${icon}`} />
          {title}
        </div>
      ))}
    </div>
  );
}

export default RadioButtonGroup;

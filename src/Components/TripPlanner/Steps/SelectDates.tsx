/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
import { DateRangePicker } from 'react-date-range';
import { differenceInDays } from 'date-fns';

import { Store } from '@Utils/Context/Context';

function SelectDates() {
  const { updateStore, geminiParamsConfig }: any = useContext(Store);
  const [state, setState] = useState([
    {
      startDate: geminiParamsConfig.startDate || new Date(),
      endDate: geminiParamsConfig.endDate || new Date(),
      key: 'selection',
    },
  ]);

  return (
    <>
      <h2 className="headline">
        How many days are you planning for this trip?{' '}
        <i className="fa-solid fa-calendar"></i>
      </h2>
      <p className="description">Choose a date range</p>
      <DateRangePicker
        onChange={(item: any) => {
          updateStore({
            geminiParamsConfig: {
              ...geminiParamsConfig,
              days:
                differenceInDays(
                  item.selection.endDate,
                  item.selection.startDate
                ) + 1,
              startDate: item.selection.startDate,
              endDate: item.selection.endDate,
            },
          });
          setState([item.selection]);
        }}
        ranges={state}
        months={2}
        minDate={new Date()}
        direction="horizontal"
        rangeColors={['#f56551']}
        staticRanges={[]}
        inputRanges={[]}
      />
    </>
  );
}

export default SelectDates;

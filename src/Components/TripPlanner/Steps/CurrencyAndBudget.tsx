/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { Store } from '@Utils/Context/Context';

function CurrencyAndBudget() {
  const { updateStore, geminiParamsConfig }: any = useContext(Store);

  return (
    <>
      <h2 className="headline">
        What is your currency and budget for this trip?{' '}
        <i className="fa-solid fa-money-bill"></i>
      </h2>
      <p className="description">Enter your budget range and currency</p>
      <FormControl className="search-destination">
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          label="Currency"
          onChange={(e) =>
            updateStore({
              geminiParamsConfig: {
                ...geminiParamsConfig,
                currency: e.target.value,
              },
            })
          }
          value={geminiParamsConfig.currency}
        >
          <MenuItem value="Peso">Peso</MenuItem>
          <MenuItem value="Dollars">Dollars</MenuItem>
          <MenuItem value="Baht">Baht</MenuItem>
          <MenuItem value="Won">Won</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Budget"
        variant="outlined"
        type="number"
        className="search-destination"
        value={geminiParamsConfig.budget || ''}
        onChange={(e) => {
          updateStore({
            geminiParamsConfig: {
              ...geminiParamsConfig,
              budget: Number(e.target.value),
            },
          });
        }}
      />
    </>
  );
}

export default CurrencyAndBudget;

import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchCountries } from '../../api';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
    paddingLeft: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  formControl: {
    minWidth: 120,
    width: 500,
    marginLeft: 20,
    marginBottom: 20
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CountrySelector({ handleChange }) {
  const [countries, setCountries] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);

  return (
    <div className={classes.container}>
      <Typography variant="h6">Select A Country:</Typography>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={(e) => handleChange(e.target.value)}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">Worldwide</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountrySelector;

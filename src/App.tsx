import React from 'react';
import './App.css';
import { Button, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Field, Form } from 'react-final-form';
import { formattedPriceToNumber } from './utils/formatPrice';
import { CustomField } from './CustomField';

function onSubmit(values: any) {
  console.log(values);
}

function validate(values: any) {
  const errors: any = {};
  if (!values['sticker-price']) {
    errors['sticker-price'] = 'Required';
  }
  if (!values['online-price']) {
    errors['online-price'] = 'Required';
  }
  if (!values['wholesale-price']) {
    errors['wholesale-price'] = 'Required';
  }
  if (!values['required-down']) {
    errors['required-down'] = 'Required';
  }
  if (formattedPriceToNumber(values['sticker-price']) > formattedPriceToNumber(values['wholesale-price'])) {
    errors['wholesale-price'] = 'Wholesale price should be more than the sticker price';
  }
  return errors;
}

function App() {
  return (
    <div className="App">
      <Card >
        <Form
          initialValues={{
            'auto-markup': 'No',
            'sticker-price': '',
            'online-price': '',
            'wholesale-price': '',
            'required-down': '',
          }}
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, hasValidationErrors }) => (
            <div className='form-container'>
              <form onSubmit={handleSubmit}>
                <h1>Pricing</h1>
                <Field
                  name="auto-markup"
                  render={({ input, meta }) => (
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="auto-markup">Auto Markup?</InputLabel>
                      <Select
                        labelId="auto-markup"
                        value={input.value}
                        onChange={input.onChange}
                        label="Auto Markup"
                      >
                        <MenuItem value='No'>No</MenuItem>
                        <MenuItem value='Yes'>Yes</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <CustomField name="sticker-price" label="Sticker Price" />
                <CustomField name="online-price" label="Online Price" />
                <CustomField name="wholesale-price" label="Wholesale Price" />
                <CustomField name="required-down" label="Required Down" />
                <div className='button-container'>
                  <Button disabled={hasValidationErrors} variant="contained" type='submit'>
                    Save & Close
                  </Button>
                </div>
              </form>
            </div>
          )}
        />
      </Card>
    </div>
  );
}

export default App;

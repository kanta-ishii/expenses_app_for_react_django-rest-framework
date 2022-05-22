import React, { useEffect } from 'react';
import {
  useForm,
  Controller,
  SubmitHandler
} from "react-hook-form";
import NumberFormat from "react-number-format";
import TextField from '@mui/material/TextField';
import CreatableSelect from "react-select/creatable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from 'styled-components';
var moment = require("moment");


const defaultValues = {
    store_name: {
        value: "error",
        label: "Select or Enter store_name..."
    },
    purchase_on: new Date(),
    price: 0,
  };

type FormValues = {
    store_name: { value: string, label: string };
    purchase_on: Date;
    price: number;
};

function AddExpenses() {
    const storeNameOptions: any = [];
    const {
      handleSubmit,
      control
    } = useForm<FormValues>({
      defaultValues
    });

    const Block = styled.li`
        display: flex;
        flex-direction: column;
        margin:0 0 1em;
    `;

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/store/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                Object.keys(data).forEach((key) => {
                    storeNameOptions.push({ value: data[key].name, label: data[key].name });
                });
                console.log(storeNameOptions);
            })
    }, [])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data)
        const datas = {
            store_name: data.store_name.value,
            purchase_on: moment(data.purchase_on).format('YYYY-MM-DD'),
            price: data.price
        }
        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        }
        fetch("http://localhost:8000/api/v1/cost/", params)
        console.log('=======POST datas=======');
        console.log(datas)
    }

    const validationRules = {
      store_name: {
        validate: (value: { value: string, label: string }) => {
          if (value.value == 'error') {
            return 'Select or Enter store_name.'
          }
          return true
        },
      }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
  
            <Block>
                <Controller
                    name='store_name'
                    control={control}
                    rules={validationRules.store_name}
                    render={({field}) => (
                        <CreatableSelect
                          isClearable
                          options={storeNameOptions}
                          {...field}
                        />
                    )}
                />
            </Block>
  
            <Block>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                  control={control}
                  name="purchase_on"
                  render={({ field }) => {
                    return (
                        <DatePicker
                            label="Basic example"
                            mask='____/__/__'
                            inputFormat='yyyy/MM/dd'
                            renderInput={(params) => (
                              <TextField
                                {...params}
                              />
                            )}
                            {...field}
                        />
                    );
                  }}
                />
              </LocalizationProvider>
            </Block>
  
            <Block>
              <Controller
                render={({ field }) => (
                  <NumberFormat {...field} className="input" />
                )}
                name="price"
                control={control}
              />
            </Block>
            <button className="button">submit</button>
          </form>
    );
  }

export default AddExpenses;
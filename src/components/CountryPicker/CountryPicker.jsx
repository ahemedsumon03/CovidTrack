import React,{useEffect,useState} from 'react';
import fetchCountryApi from "../../api/CountriesApi";
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleChange }) => {

    const [countryData,setCountryData] = useState([]);

    useEffect(()=>{
        fetchCountryApi().then((data)=>{
            // console.log(countries);
            setCountryData(data);
        }).catch(e=>{
            console.log(e);
        });
    },[]);


    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={(e)=>handleChange(e.target.value)}>
                    <option value='global'>Global</option>
                    {countryData?.countries?.map((country,i)=> <option value={country.name} key={i}>{country.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;
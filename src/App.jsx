import React,{useEffect,useState} from 'react';
import styles from './app.module.css';
import fetchUrl from './api/index';
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import Covid19Image from './image/image.png';

const App = () => {

    const [data,setData] = useState([]);
    const [country,setCountry] = useState('');

    useEffect(()=>{
        fetchUrl().then((data)=>{
            setData(data);
        }).catch(e=>{
            console.log(e);
        });
    },[]);

    const handleChange = (country)=>{
        setCountry(country);
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src={Covid19Image} alt='covid-19'/>
            <Cards data={data}/>
            <CountryPicker handleChange={handleChange}/>
            <Chart data={data} country={country}/>
        </div>
    );
};

export default App;
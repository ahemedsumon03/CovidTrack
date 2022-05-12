import React,{useEffect,useState} from 'react';
import fetchDailydata from "../../api/dailyDataApi";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, BarChart, Bar} from 'recharts';
import styles from './Chart.module.css';
import fetchDataSingleCountry from "../../api/SelectCountryApi";

const Chart = ({ data: { confirmed,deaths,lastUpdate,recovered },country}) => {

    const [initialDailyData,setInitialDailyData] = useState([]);
    const [initialObj,setInitialObj] = useState({});
    const [singleCountry,setSingleCountry] = useState([]);
    console.log(singleCountry);
    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailydata();
            setInitialDailyData(initialDailyData);
            initialDailyData.map(({ positive,recovered,death,dateChecked:date })=>setInitialObj({positive,recovered,death,date }));
        };
        fetchMyAPI();
    }, []);


    useEffect(()=>{
        fetchDataSingleCountry(country).then((data)=>{
            setSingleCountry(data);
        }).catch(e=>{
            console.log(e);
        });
    },[country]);

    const data = [
        {
             name:country,
             "Infected": singleCountry?.confirmed?.value,
             "Death": singleCountry?.deaths?.value
        }
    ];


    return (
        <div className={styles.container} style={{ marginLeft:'auto',marginRight:'auto' }}>
            {
               country ? (
                   singleCountry?.confirmed ? (
                       <BarChart width={730} height={250} data={data}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name"/>
                           <XAxis dataKey="Infected"/>
                           <YAxis dataKey="Death"/>
                           <Tooltip />
                           <Legend />
                           <Bar dataKey="Infected" fill="#8884d8" />
                           <Bar dataKey="Death" fill="#FF0000" />
                       </BarChart>
                   ):null
               ):(
                   initialDailyData ? (
                       <LineChart width={730} height={250} data={initialDailyData}
                                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="dateChecked" />
                           <YAxis dataKey="positive" />
                           <Tooltip  />
                           <Legend />
                           <Line type="monotone" dataKey="positive" stroke="#8884d8" />
                           <Line type="monotone" dataKey="death" stroke="#82ca9d" />
                       </LineChart>
                   ):null
               )
            }
        </div>
    );
};

export default Chart;
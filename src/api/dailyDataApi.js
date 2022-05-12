import axios from "axios";

const fetchDailydata = async ()=>{

   try {
       const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
       return data;
   }catch (e) {
       console.log(e);
   }

};

export default fetchDailydata;
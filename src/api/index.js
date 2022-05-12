import axios from "axios";
const url = "https://covid19.mathdro.id/api";

const fetchUrl = async ()=>{
    let modifyData;
   try {
       const { data:{confirmed,recovered,deaths,lastUpdate} } = await axios.get(url);
       modifyData = {
           confirmed,
           recovered,
           deaths,
           lastUpdate
       };
       return modifyData;
   }catch (e) {
       console.log(e);
   }
};

export default fetchUrl;
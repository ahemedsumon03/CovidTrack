import axios from "axios";

const fetchCountryApi = async ()=>{

    try{
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries');
        return data;
    }catch (e) {
        console.log(e);
    }

};

export default fetchCountryApi;
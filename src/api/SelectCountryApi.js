import axios from "axios";

const fetchDataSingleCountry = async (country)=>{
    try {

        const url = "https://covid19.mathdro.id/api/countries";
        const { data } = await axios.get(`${url}/${country}`);
        return data;

    }catch (e) {
        console.log(e);
    }
};

export default fetchDataSingleCountry;
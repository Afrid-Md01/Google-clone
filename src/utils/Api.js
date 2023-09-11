import axios from 'axios';

const Base_URL = 'https://www.googleapis.com/customsearch/v1';

const params = {
    key:'AIzaSyAR7pk_rex7_EYhJTeFUJuimj5hxbnvcIU',
    cx:'c23a5d449c6a34b1a'
}

export const fetchDataFromApi=async(payload)=>{
    const {data} = await axios.get(Base_URL, {
        params:{...params, ...payload}
    })
    return data;
}
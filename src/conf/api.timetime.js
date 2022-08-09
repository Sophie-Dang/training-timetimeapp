import * as axios from 'axios';

const apiTimeTime = axios.create({
    baseURL: 'https://test-timetime-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiTimeTime;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-45648/us-central1/api'
});

export default instance
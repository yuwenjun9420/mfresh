import axios from 'axios'
export default {
    getSliders(){
        return axios.get('/api/sliders');
    }
}
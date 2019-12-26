import axios from 'axios'

export default {
    login(user){
        console.log(user);
        return axios.get('/api/login',{
            params:user
        })
    }
}
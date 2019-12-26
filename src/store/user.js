import us from '@/service/user.js'
export default {
    state: {
        isLogin: localStorage.getItem('isLogin') ? true : false
    },
    mutations: {
        setLoginState(state, flag) {
            state.isLogin = flag;
        }
    },
    actions: {
        login({ commit }, user) {
            return us.login(user).then(res=>{
                const {code,token}=res.data;
                if(token){
                    commit('setLoginState',true);
                    localStorage.setItem('token',token);
                    localStorage.setItem('isLogin', true);
                }
                return code;
            })
        },
        logout({commit}){
            commit('setLoginState',false);
            localStorage.removeItem('isLogin');
            localStorage.removeItem('token');
        }
    }
}
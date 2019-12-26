export default {
    state: {
        carts: JSON.parse(localStorage.getItem('carts')) || []
    },
    mutations: {
        //添加到购物车
        addToCart(state, item) {
            const isHasItem = state.carts.find(v => v.pid == item.pid);
            if (isHasItem) {
                isHasItem.num++;
            } else {
                state.carts.push({
                    ...item,
                    num: 1,
                    isActive: true
                })
            }
            localStorage.setItem('carts',JSON.stringify(state.carts));
        },
        numAdd(state, index) {
            state.carts[index].num++;
        },
        numSub(state, index) {
            if (state.carts[index].num > 1) {
                state.carts[index].num--;
            }
        },
        //移除购物车
        removeToCart(state,index){
            state.carts.splice(index,1);
        },
        //全部选中
        selectAll(state){
            state.carts.forEach(item=>{
                item.isActive=true;
            })
        }
    },
    actions: {
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        numAdd({ commit }, index) {
            commit('numAdd', index);
        },
        numSub({ commit }, index) {
            commit('numSub', index);
        },
        removeToCart({commit},index){
            commit('removeToCart',index);
        },
        selectAll({commit}){
            commit('selectAll');
        }
    },
    getters: {
        //总金额
        total(state){
            let sum=0;
            state.carts.forEach(item => {
                if(item.isActive){
                    sum+=item.price*item.num;
                }
            });
            return sum;
        },
        //选中
        selectItem(state){
            let count=0;
            state.carts.forEach(item=>{
                if(item.isActive){
                    count+=item.num;
                }
            })
            return count;
        },
        allItem:state=>state.carts.reduce((sum,item)=>sum+=item.num,0)
    }
}
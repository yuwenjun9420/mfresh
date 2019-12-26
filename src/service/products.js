import axios from 'axios'

export default {
    getProduct(pageNum,type){
        return axios.get('/api/product').then(res=>{
            const {code,data:products}=res.data;
            if(code){
                const pageSize=3;
                const list=products.filter(item=>item.type==type);
                const pagesCount=Math.ceil(list.length/pageSize);
                const productList=list.filter((item,index)=>index<=pageNum*pageSize-1 && index>(pageNum-1)*pageSize-1);
                return {productList,pagesCount}
            }else{
                return null;
            }
        })
    },
    getProductDetails(pid){
        return axios.get('/api/product').then(res=>{
            const {code,data:products}=res.data;
            if(code){
                return products[pid-1];
            }else{
                return null;
            }
        })
    }
}
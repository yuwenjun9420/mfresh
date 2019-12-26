import axios from 'axios'
export default {
    getNewsList(pageNum){
        return axios.get('/api/newlist').then(res=>{
            const {code,data:newslist}=res.data;
            if(code){
                const count=5; //每页显示的新闻条数
                const pagesCount=Math.ceil(newslist.length/count); //总页数
                if(pageNum<1||pageNum>pagesCount){
                    return null;
                }else{
                    let list=newslist.filter((item,index)=>index<=pageNum*count-1 && index>(pageNum-1)*count-1);
                    return {pagesCount,list}
                }
            }else{
                return null;
            }
        })
    },
    getNewsContent(nid){
        return axios.get('/api/newlist').then(res=>{
            const {code,data:newslist}=res.data;
            if(code){
                return newslist[nid-1];
            }else{
                return null;
            }
        })
    }
}
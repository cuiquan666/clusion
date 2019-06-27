import axios from 'axios';


export let getNews =()=>{
    return axios.get('/static/sork/newList.json')
}



export let getInfo =(id)=>{
    return axios.get('/static/sork/newsinfo/'+id+'.json')
}
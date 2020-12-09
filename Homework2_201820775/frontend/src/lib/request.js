import axios from 'axios';

const API_DEFAULT = "http://localhost:3002/";
const instance = axios.create({ baseURL: API_DEFAULT });

export async function getReviews(){
    console.log("go!!!back!!!--get----!!!");
    const result = await instance.get('/');
    
    return result.data
}

export async function createReview({movie_name,review_content,rate}){
    console.log("go!!!back!!!---post----!!!");
    const result = await instance.post('/',{movie_name,review_content,rate});
    
    return result.data
}

export async function deleteReview({id}){
    const result = await instance.delete('/'+id,{id});
    return result.data
}

export default{
    getReviews,
    createReview,
    deleteReview
}
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url)=> {
    const [data, setData] = useState([]);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
       axios.get(url)
       .then(res=>{
        setLoading(false)
        setData(res.data)
       })
       .catch(error=>{
        setLoading(true)
        setError(error.message)
       })
    },[url]);

    return {data,error,loading}
}
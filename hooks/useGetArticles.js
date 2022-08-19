import { useEffect, useState } from "react";
import axios from 'axios';
const useGetArticles = (API) =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
	useEffect(()=>{
		async function getData() {
			setLoading(true);
			const response = await axios(API)
			setArticles(response.data);
			setLoading(false);
		}
		getData();
	},[API])
    return {
		loading,
		articles
	};
}
export default useGetArticles;
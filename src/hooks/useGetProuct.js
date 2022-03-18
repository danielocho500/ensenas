import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig";
import { storage } from '../firebase/firebaseConfig';
import {getDownloadURL, ref} from "firebase/storage";

export const useGetProduct = (name) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    console.log('unu')

    useEffect(() => {

        console.log('aloo')
        const docRef = doc(db, 'products', name);
        getDoc(docRef)
            .then((product) => {
                

                setData(product.data())
                const imageRef = ref(storage, `products/${product.data().image}`);
                getDownloadURL(imageRef)
                    .then((url) => {
                        setUrl(url)
                    })
            })
            .catch((error) => {
                setError(error);
                console.log(error)
            } )
            .finally(() => {
                setLoading(false);
            })
        
    }, [])

    return {data, loading, error, url}
}
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/firebaseConfig';
import {getDownloadURL, ref} from "firebase/storage";

export const useGetImage = (name) => {
    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const imageRef = ref(storage, `products/${name}`);

    useEffect(() => {
        
        getDownloadURL(imageRef)
        .then((url) => {
            setUrl(url)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })   

    }, [])
    
    return {url, loading, error}
    
}

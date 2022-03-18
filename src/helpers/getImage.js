import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../firebase/firebaseConfig"

export const getImage = (name) => {

    const imageRef = ref(storage, `products/${name}`);
    getDownloadURL(imageRef)
        .then((url) => {
            return url;
        })
}
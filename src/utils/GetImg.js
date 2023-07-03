import {useState,useEffect} from "react";
import { Storage } from "../data"; 
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";

function GetImg({src,setImageUrls}) {

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      const urls = response.items.map((item) => getDownloadURL(item));
      Promise.all(urls).then((downloadUrls) => {
        setImageUrls(downloadUrls);
      });
    });
  }, []);
  
  const imagesListRef = ref(Storage , src);

  
}

export default GetImg;

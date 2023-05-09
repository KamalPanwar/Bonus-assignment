import React,{useRef,useState} from "react";
import { Button } from "@mui/material";

export default function Imageupload() {
  const inputRef = useRef(null);
  const[img,setImg] =  useState('')

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImg(file)
    setImg(URL.createObjectURL(file));
  }

  return (
    <div>
      <Button variant='contained' onClick={()=> inputRef.current.click() }>drop the image</Button>
      <input type="file" onChange={handleFileInputChange} ref={inputRef}  hidden
      />
  { img &&   <img src={img} alt='local img' style={{width:"200px",height:"200px"}} />}
    </div>
  );
}

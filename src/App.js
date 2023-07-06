import React,{useState} from "react";
import './AllStyles.css'
import GetImg from "./utils/GetImg";
import CardB from "./Component/CardB/CardB";

function App() {
  const [imageUrls, setImageUrls] = useState([]);
GetImg({src:'men/',setImageUrls:setImageUrls})

  return (
  <> 

<div className="title">
  <span></span>
  <h2>Categories For Women</h2>
</div>
<section style={{display:'flex',justifyContent:'space-between', alignItems:'center' , flexWrap:'wrap'}}>




{imageUrls.map((url, index) => (
 index<4 ? <CardB img={url} key={index} arrow={true} /> : null 
  ))}
</section>




  </>
  );

}

export default App;

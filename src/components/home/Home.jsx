import {useState, useEffect} from "react";
import axios from "axios"
import Datas from "../datas/Datas"
const Home =()=>{
  const [status,setStatus]=useState(false)
  const [res,setRes] =useState([])
  const [result,setResult]=useState([])
  const [page,setPage] = useState(1)
  const [imgName,setImgName] = useState('child')
  
const changeHandler=(e)=>{
  e.target.value===''?setImgName(''):setImgName(e.target.value)
  searchResults()
}
  const ApiKey = "C5Qqg1Dk7hQFjwdZozwzPyCLBP7ChI9RXWXHyy829Oc"
  const searchResults = async () =>{
    try{
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imgName}&client_id=${ApiKey}`;
    const response = await axios.get(url)
    //console.log(response.data.results)
    const data = await response.data
  //  const filterData = data.results
    
     setResult(data.results)
     setStatus(true)
     
    //console.log("results",result)
    }catch(e){
      alert(e)
    }
    
  }
useEffect(()=>{
     searchResults()
 },[])
const nextHandler=()=>{
    setPage((page) => page + 1)
    searchResults()
  // console.log("nomber of page",page)
 }
  const previousHandler=()=>{
    setPage((page) => page - 1)
    searchResults()
    //console.log("nomber of page",page)
  }
  return(
    <>
    <div className="container flex flex-col">
     <div className="search-inputs flex">
    <input type="text" placeHolder="Search Img" onChange={changeHandler}/>
      </div>

    <Datas imgName={imgName} status={status} result={result} more={nextHandler} previous={previousHandler} pageNo={page}/>
</div>
    </>
    )
}
export default Home
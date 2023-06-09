import styled from "styled-components"
import {useState,useEffect} from "react"

const Datas=(props)=>{
  
  
  const Wrapper=styled.section`
  
  width:100%;
  margin:2rem auto;
  .search-results {
  width: 100vw;
  flex-wrap: wrap;
  margin:2rem auto;
}

.search-result {
  margin-bottom: 60px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding:5px 10px;
  overflow: hidden;
  transform: scale(0.8);
  background: #ccc;
  transition: all 0.2s;
  margin-left:0;
}

.search-result:hover{
  transform: scale(0.95);
}

.search-result img{
  width: 100%;
  max-height:50vh;
  border-radius: 10px;
  box-shadow: 2px 2px 4px #aaa,
            inset -2px -2px 4px #fff,
            inset 2px 2px 4px #000;
  transition: transform 0.3s ease-in-out;
}
.search-result:hover img{
  background: #999;
  box-shadow: 2px 2px 10px #000,
            inset -8px -8px 40px #000,
            inset 8px 8px 40px #fff;
}
.search-result a {
  padding: 10px;
  display: block;
  height:min-content;
  color: #333;
  text-decoration: none;
  text-align: center;
  font-weight: 900;
  font-size: 2.5rem;
  margin:0.8rem auto;
  border-radius: 10px;
  text-shadow:2px 2px 4px #ccc;
  box-shadow: 2px 2px 4px #aaa,
            inset -2px -2px 4px #fff,
            inset 2px 2px 4px #000;
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;
}

.search-result:hover a {
  background: #999;
  text-shadow: 2px 2px 4px #000;
  color:#fff;
  box-shadow: 2px 2px 4px #aaa,
            inset -2px -2px 4px #000,
            inset 2px 2px 4px #fff;
}
  .btn-conatiner{
    margin:8rem auto 0 0;
    width:100vw;
    .page-no{
      text-align:center;
      font-size:22px;
      color:#fff;
    }
  }
  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
  .search-result {
    a{
      font-size:2rem;
    }
  }
  .search-result img{
    object-fit:cover;
  }
  .btn-conatiner{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
      margin:0 auto;
      font-size:16px;
    }
    .page-no{
      font-size:15px;
      margin:0 2rem;
    }
  }
  }

  `

  return(
    <Wrapper className="container flex">
    <div className="search-results grid grid-three-col">
      {props.status?
        props.result.map((item)=>{
          return (
          <div className="search-result" key={item.id}>
          <img src={item.urls.small} alt={item.alt_description}/>
          <a href={item.links.html} target="_top">{item.alt_description}</a>
          <a href={item.urls.regular} download={item.links.download} target="_parent">Download</a>
          </div>
          )
        }):''
      }

      </div>
    {props.imgName.trim().length==0?'':<div className="btn-conatiner flex">
    <a href="#sections">
      <button className="btn" type="submit" onClick={props.more}>More
    </button></a>
    <div className="page-no">
<span>{props.pageNo >= 2?<span>Page No:{props.pageNo}</span>:<span></span>}</span>
    </div>
   {props.pageNo >= 2?<a href="#sections"><button className="btn"  type="submit" onClick={props.previous}>Previous
    </button></a>:''}
    </div>}
    </Wrapper>
    )
}
export default Datas
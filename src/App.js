import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
 const [loading ,setLoading]=useState(true)
 const [jobs ,setJobs]=useState([])
 const [value,setValues]=useState(2)
const fetchData= async ()=>{
  const data= await fetch(url);
  const newItems= await data.json()
  setJobs(newItems);
  setLoading(false)
}
useEffect(()=>{
  fetchData()
},[])
if(loading){
  return <section className="section loading">
      <h2>Loading...</h2>
  </section>
}
const {title,dates,duties,company,order}=jobs[value]
  return  <section className="section">
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
      <div className="jobs-center">
       {/*Button Container*/}
       <div className="btn-container">
         {
           jobs.map((item,index)=>{
             return <button key={item.id} className={`job-btn ${index===value && 'active-btn'}`} onClick={()=>setValues(index)}>{item.company}</button>
           })
         }
       </div>
       {/*Job Info*/}
       <article className="job-info">
         <h3>{title}</h3>
         <h4>{company}</h4>
         <p className="job-date">{dates}</p>
         {duties.map((duty,index)=>{
           return <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"/>
                    <p>{duty}</p>
                  </div>
         })}
       </article>
      </div>
    
            
  </section> 

}

export default App

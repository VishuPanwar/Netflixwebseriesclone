import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata';

console.log(Sdata[0].sname);



ReactDOM.render(
  <>
    <h1 className='heading_style'>Recommended Netflix Web Series</h1>
    {/* <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    /> */}
    
      {/* {Sdata.map((val,index)=>{
  console.log(index);
    return(
      <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
    );
      
})} */}
  {Sdata.map((val,index)=>{
  console.log(index);
    return(
      <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
    );
      
})}

    {/* <Cards
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].link}
    />
    <Cards
      imgsrc={Sdata[6].imgsrc}
      title={Sdata[6].title}
      sname={Sdata[6].sname}
      link={Sdata[6].link}
    />
    <Cards
      imgsrc={Sdata[7].imgsrc}
      title={Sdata[7].title}
      sname={Sdata[7].sname}
      link={Sdata[7].link}
    />
    <Cards
      imgsrc={Sdata[7].imgsrc}
      title={Sdata[7].title}
      sname={Sdata[7].sname}
      link={Sdata[7].link}
    />
    <Cards
      imgsrc={Sdata[8].imgsrc}
      title={Sdata[8].title}
      sname={Sdata[8].sname}
      link={Sdata[8].link}
    /> */}
    <div className='h2'>
    <h2>Thanks for Visiting</h2>
    </div>
    
   </>,
   document.getElementById('root')
 ); 
   

//or


// function ncard(val){
//   console.log(val);
//     return(
//       <Cards
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//     );
      
// }


// render 

// {Sdata.map()}


// fun inside fun 
// function ncard(val){
//   console.log(val);
//     return(
//       <Cards
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//     );
      
// }
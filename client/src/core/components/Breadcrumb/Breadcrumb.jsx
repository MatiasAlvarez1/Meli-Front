import React from 'react';
import "./Breadcrumb.scss";

const Breadcrumb = (props) => {
  return (  
    <div className="breadcrumb__container">
      {props.breadcrumb.map((x, idx, arr)=>{
        return <div className="breadcrumb__info" key={idx}>
          <div className="breadcrumb__name" onClick={()=>props.handleSearch(x.name)}>{x.name}</div>
          {idx < arr.length-1 && <div className="breadcrumb__crumb">></div>}
        </div>
      })}
    </div>
  );
};

export default Breadcrumb;

import React from "react";
import '../Style/Testimonies.css';

interface TestimoniesProps{ 
    Name:string,
    Role:string,
    Testimonie:string,
    Image:string, 
    Country:string,
    Corporation:string
}

const Testimonies : React.FC<TestimoniesProps> = (props) => {


    return(
    <div className='container-testimonie'>
        <img 
        className='image-testimonie'
        src={require(`../Image/${props.Image}`)}
        alt = 'foto de dador de testimonio'
        />
        <div className='container-testimonie-text'>
          <p className='testimonie-name'>{props.Name} en {props.Country}</p>
          <p className='role-testimonie'>{props.Role} en {props.Corporation}</p>
          <p className='testimonie-text'>"{props.Testimonie}"</p>
        </div>
      </div>
    );
}


export default Testimonies;
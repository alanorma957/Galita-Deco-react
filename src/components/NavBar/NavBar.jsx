import React from 'react';
import cartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
  const barra = [
    {id: 1, name: 'home'},
    {id: 1, name: 'quienes somos'},
    {id: 1, name: 'productos'},
  ];

  return (
    <div>
      <nav>
        {barra.map((cat, index) =>{
          return (<a href='#' key={index}>
            {cat.name}
          </a>
           );
        })}
    
      </nav>


      <cartWidget/>
    

    </div>
  );
};

export default NavBar;
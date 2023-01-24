
//import React from 'react'

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = ( newCategory ) => {
        // console.log( newCategory );
        
        // Validando que la Categoria Existe
        if ( categories.includes( newCategory ) ) return;

        setCategories([ newCategory,...categories ]);
        // setCategories([ ...categories, 'Valorant' ]);
        //setCategories( cat => [ ...cat, 'Valorant' ] );
    };

    //console.log( categories );

    return (
      <>
          {/** Titulo */}
          <h1>GifExpertApp</h1>    
          
          {/** Input */}
          <AddCategory 
                // setCategories={ setCategories }
                onNewCategory= { event => onAddCategory( event ) } 
                // onNewCategory= { onAddCategory } 
          />
          
  
          {/** Listado de Gif */}
          {/*<button onClick={ onAddCategory }>Agregar</button> */}
          <ol>
              { 
                categories.map( category => {
            (
                        <div key={ category }>
                            <h3>{ category }</h3>
                            <li>{ category }</li>
                        </div>
                        )
                } )

                
              }
              {/*<li>ABC</li> */}             
          </ol>
              {/** Gif Item */}
  
  
      </>    
    )
}

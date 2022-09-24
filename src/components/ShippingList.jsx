import React from 'react'
import { useState } from 'react'
import Form from './Form'

function ShippingList() {
    const [items,setitems]= useState([])
    const addToList=(item)=>{
      console.log(items);
      const itemsCopy =[...items];
      itemsCopy.push(item)
      setitems(itemsCopy);

    };
  return (
    <div
    style={{


    }  
    } 
    >
    <Form  addToListCallback={(
      value) => addToList(value)}/>
      <table>
      
      <thead className='thead'>
      <th>Weight</th>
      <th>color</th>
      <th>Location</th>
      <th>title</th>
      </thead>

      <tbody>{
        items.map(item => {
          return(
            <tr key={item.itemtitle}>
              <td>{item.itemweight}</td>
              <td>{item.itemcolor}</td>
              <td>{item.itemlocation}</td>
              <td>{item.itemtitle}</td>
            </tr>
          )
        })
        }
        
      </tbody>
      </table>
    </div>
  )
}
export default ShippingList
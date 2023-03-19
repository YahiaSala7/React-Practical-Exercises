import React, { useState } from 'react'
import './style.css'
import p1 from './imgs/p4.jpg'
import p2 from './imgs/p1.jpg'
import p3 from './imgs/p2.jpg'
import p4 from './imgs/p3.jpg'
import p5 from './imgs/p5.jpg'
const BirthdayToday = () => {
    const persons =[
{
id:1,
name:"Malek Ahmed",
age:20,
img:p1,
},
{
id:2,
name:"Yousef Ahmed",
age:23,
img:p5 ,
},
{
id:3,
name:"Karim saad",
age:35,
img:p4 ,
},
{
id:4,
name:"Ramy Mohamed",
age:15,
img:p2,
},
{
id:5,
name:"Ahmed Salah",
age:16,
img:p3,
},
];
const [items, setItems] = useState(persons)

  return (
    <div className='box'>
        <h2>{items.length} birthdays today</h2>
        {
            items.map((person)=> {
                return(
                    <div key={person.id} className='person' > 
                    <img className='img' src={person.img} alt="" />
                        <div className='info'>
                           <h3>{person.name}</h3> 
                            <p> {person.age} years</p>
                        </div>
                    </div>
                )
            })
        }
        <button onClick={()=>setItems([])}>Clear All</button>
    </div>
  )
}

export default BirthdayToday
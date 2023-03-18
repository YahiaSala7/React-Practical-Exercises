import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import data from './data'
import './style.css'

const Faq = () => {
const [answer, setAnswer] = useState(false)
const [id,setId]=useState([]);

  function handleEvent(e){
    setAnswer((!answer));
    if(id.includes(e.id)){
      for (let i = 0; i < id.length; i++) {
        if (id[i] === e.id) {
            id.splice(i, 1);
        }
    }
    } else
    setId([...id,e.id]);
    
}
console.log(id)
// console.log(answer)
  return (
    <div className='box'>
    <h2>Questions and Answers </h2>
        {
            data.map(faq => {
              return(
                    <div key={faq.id} className='content'  >
                   <div className='info' >
                   <FontAwesomeIcon icon={faAngleRight} className={  id.includes(faq.id)? 'icon-rotate' : 'icon'} onClick={()=>handleEvent(faq)} ></FontAwesomeIcon>
                   <h3>{faq.question}</h3>
                   </div>  
                    {
                      id.includes(faq.id)  ? <h4 className='answer'> {faq.answer} </h4> : ''
                    }

                    </div>
                )

            })
        }
    </div>
  )
}

export default Faq
import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
const ModalOverlay = () => {
const [one, setOne] = useState(false);
const [two, setTwo] = useState(true);


  return (
    <div>

    <div className="offer-box">


{

 one ? 
 two ? <div className="offer-message">
<FontAwesomeIcon icon={faX} className='icon-x' onClick={()=>setOne(!one)} ></FontAwesomeIcon>
     <p>click the buttom below to accept our amazing offer! </p>
     <button className='button-accept' onClick={()=>setTwo(!two)}>Accept offer</button>
 </div> 
:<p className='offer-accepted'>Offer accepted</p> 

:<button className='button-show' onClick={()=>setOne(!one)}>Show offer</button>
}
    </div>

    </div>
  )
}

export default ModalOverlay
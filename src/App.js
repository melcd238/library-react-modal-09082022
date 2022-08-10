import Modal from './lib/component/modal';
import React, {useState } from 'react';
import ReactDOM from 'react-dom'


function App() {

  const [isShowing, setIsShowing] = useState(true)

  const closeModal = () =>{
    setIsShowing(!isShowing)
  }


  return isShowing ? ReactDOM.createPortal(
    <>
       <Modal label="Mon texte" closeModal={(e)=>closeModal()}/>
    </>, document.body
  )
  :
  null
}

export default App;

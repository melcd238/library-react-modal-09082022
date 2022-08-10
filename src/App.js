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
       <Modal label="Your text here!!!!!!!" closeModal={(e)=>closeModal()} stylesModal="DANGER"/>
    </>, document.body
  )
  :
  null
}

export default App;

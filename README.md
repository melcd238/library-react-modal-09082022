# Simple modal react component library
Simple Modal component React is a library that allows to create modals easily with 3 different styles: SUCCESS (green), ERROR (red) and DANGER (orange).



## Install
npm install --save simple-modal-component-library 

## Usage

In React app, use Modal components : 
import  { Modal } from "simple-modal-component-library 

Whrite the logic to show or hide the modal : 

 const [isShowing, setIsShowing] = useState(false) 

 Whrite the logic to close the modal : 

 const closeModal = () =>{ setIsShowing(!isShowing)} 

 ## Modal props 
 stylesModal (string): You have 3 possibilities SUCCESS, ERROR or DANGER to stylize  your modal, this props it's optional \
 closeModal (function) : logic to close modal \
 label (string) : text you want to display 





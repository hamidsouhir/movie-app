import React, { useState } from 'react'
import Modal from 'react-modal';
import Rate from './Rate';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');
const AddMovie = ({handleAdd}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = useState("");
    const [posterUrl, setPoster] = useState("");
    const [rating, setRating] = useState(1)


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
const handleRating=(x)=>setRating(x)
const handelSubmit=(e)=>{
e.preventDefault() ; 
const newList={
  id:Math.random(),
  title ,
  posterUrl,
  rating 
}
handleAdd(newList)
closeModal()
}


  return (
    <div>
     <button className='but' onClick={openModal} style={{hover:"transform: scale(1.1)"}}>Add Movies</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handelSubmit} className='mv' action="">
              <label> title</label>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
              <label>rating</label>
              <Rate handleRating={handleRating} rating={rating}/>
              <label>posterUrl</label>
              <input type="Url"  value={posterUrl} onChange={(e)=>setPoster(e.target.value)}/>
              <div>
              <button type="submit" className='btn btn-primary'>confirm</button>
              <button onClick={()=>closeModal()} className='btn btn-primary'>close</button>
              </div>
          </form>
          </Modal>   
    </div>
  )
}

export default AddMovie
import React , {useState} from 'react'
import Modal from 'antd/es/modal/Modal';
import { Link } from 'react-router-dom';

const Tour = ({addDetails, totalPeopled, id, named, image, info, daysInp, countrySelect, name, price, removeTour, PeopleInp, NameInp}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{width: "45%",height: 'max-content', padding: '2%'}}>
      <div style={{height:'60vh'}}>
      <img style={{width: '100%', height:'100%'}} src={image} alt="" />

      </div>
      <h2>{name}</h2>
      <p style={{fontWeight: 'bold'}}>{price} $</p>
      <p>{info}</p>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>

      <button style={{padding: '10px',width:'140px',cursor: 'pointer', backgroundColor: 'pink' , borderRadius: '5px'}} onClick={() => removeTour(id)}>Not interested</button>
      <button style={{padding: '10px',width:'140px',cursor: 'pointer', backgroundColor: 'skyblue' , borderRadius: '5px'}} onClick={showModal} >I'm interested</button>
      <Link to={'/checkout'} style={{padding: '10px',width:'140px',cursor: 'pointer', backgroundColor: 'lightgreen' , borderRadius: '5px', color: 'black', textDecoration: 'none', border: '2px solid' , textAlign: 'center'}} >Checkout</Link>

      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <h3>Basic Model</h3>
          <ul>

            <li>Name<input value={named} onChange={NameInp} type='text' />
            </li>

            <li>People <input value={totalPeopled} onChange={PeopleInp} type='number' />
            </li>


            <li>
              <select onChange={countrySelect} >
                <option >Select Country </option>
                <option value={1995}>Paris</option>
                <option value={3895}>Ireland</option>
                <option value={1995}>Vienna</option>
                <option value={2095}>Rome</option>
                <option value={2595}>Poland</option>
              </select>
            </li>

            <li>
              <select onChange={daysInp}>
                <option >Length of Days </option>
                <option value={7}>7 Days </option>
                <option value={8}>8 Days </option>
                <option value={10}>10 Days </option>
                <option value={14}>14 Days </option>
              </select>
            </li>
            <button onClick={addDetails}>Add Here</button>
          </ul>

        </Modal>



    </div>
  )
}


export default Tour
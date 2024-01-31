import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Toursss from './Toursss'
import Checkout from './Checkout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const url = 'https://course-api.com/react-tours-project'


const App = () => {

  let getData = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')): [];

  let [name,setName] = useState()
  let [totalPeople,setTotalPeople] = useState()
  let [country,setCountry] = useState()
  let [days,setDays] = useState()
  let [arr,setArr] = useState(getData)
  let [img]=useState()

  let NameInp =(e)=>{
    setName(e.target.value)
  }

  let PeopleInp=(e)=>{
    setTotalPeople(e.target.value)
  }


  let countrySelect=(e)=>{
      setCountry(e.target.value)
  }

  let daysInp=(e)=>{
    setDays(e.target.value)
  
  }

  let addDetails=(e)=>{
    setArr([...arr,{imgs:img, names: name, totalPeoples:totalPeople, countires:country, dayss:days,}])
    setName('')
    setTotalPeople('')
    setDays('')
  }
  
  useEffect(()=>{
    
    localStorage.setItem('Data',JSON.stringify(arr))

  })

  const [loading, setLoading] = useState(true)
  
  const [tours, setTours] = useState([])

  const removeTour = (id) => {

    setTours(
        tours.filter((tour)=>{
          return tour.id !== id;
        })
      )

  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } 
    catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  if (tours.length === 0) {
    return (
        <div className='title'>
          <h2>NO TOURS LEFT</h2>
          <button>refresh</button>
        </div>
    )
  }



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Toursss tours={tours} totalPeopled={totalPeople} named={name} addDetails={addDetails} daysInp={daysInp} countrySelect={countrySelect} NameInp={NameInp} PeopleInp={PeopleInp} removeTour={removeTour} />} />
          <Route path='/checkout' element={ <Checkout/> }/>
          </Routes>
          {/* <Route path='/checkout' element={<Checkout/>}/> */}

        </BrowserRouter>

    </div>
  )
}

export default App

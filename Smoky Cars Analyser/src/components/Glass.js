import './Glass.css'
import { useState } from 'react'
import axios from 'axios'

function Glass() {
  const [engSize, setengSize] = useState('')
  const [cylinders, setcylinders] = useState('')
  const [Transmission, setTransmission] = useState('')
  const [Gears,setGears] = useState('')
  const [ftype,setftype] = useState('')
  const [fcc,setfcc] = useState('')
  const [fch,setfch]=useState('')
  const [fcco1,setfcco1]=useState('')
  const [fcco2,setfcco2]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { engSize,cylinders,Transmission,Gears,ftype,fcc,fch,fcco1,fcco2 }

    axios
      .post('http://localhost:8080/prediction', params)
      .then((res) => {
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setengSize('')
    setcylinders('')
    setTransmission('')
    setGears('')
    setftype('')
    setfcc('')
    setfch('')
    setfcco1('')
    setfcco2('')
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>Smoky Cars Analyser</h4>
        <div className="glass__form__group">
          <input
            id="engSize"
            className="glass__form__input"
            placeholder="Engine size belongs to 0 -10"
            required
            autoFocus
            min="0"
            max="10"
            //pattern="[0-9]{0,1}"
            title="Engine size"
            type="float"
            value={engSize}
            onChange={(e) => setengSize(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="cylinders"
            className="glass__form__input"
            placeholder="Cylinders"
            required
            min="3"
            max="18"
            type="number"
            title="No of Cylinders"
            //pattern="[0-9]+([\.,][0-9]+)?"
            value={cylinders}
            onChange={(e) => setcylinders(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Transmission"
            className="glass__form__input"
            placeholder="Transmission type A-0, AM-1, AS-2, AV-3, M-4, "
            required
            min="0"
            max="4"
            type="number"
            title="Transmission type"
            value={Transmission}
            onChange={(e) => setTransmission(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Gears"
            className="glass__form__input"
            placeholder="Gears(0-10)"
            required
            min="0"
            max="12"
            type="number"
            title="No. of GEARS"
            //pattern="[0-9]+([\.,][0-9]+)?"
            // step="0.01"
            value={Gears}
            onChange={(e) => setGears(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="ftype"
            className="glass__form__input"
            placeholder="Fuel type Reg Gasoline-0, Pre Gasoline-1,Diesel-2,Ethanol-3,Natural gas-4"
            required
            min="0"
            max="4"
            type="number"
            title="Fuel tupe in 0 to 4"
            // pattern="[0-9]+([\.,][0-9]+)?"
            // step="0.01"
            value={ftype}
            onChange={(e) => setftype(e.target.value)}
          />
        </div>
        
        <div className="glass__form__group">
          <input
            id="fcc"
            className="glass__form__input"
            placeholder="Fuel Consumption in city (L/100 km)"
            required
            min="4"
            max="32"
            type="float"
            title="Fuel Consumption in city"
            // pattern="[0-9]+([\.,][0-9]+)?"
             step="0.01"
            value={fcc}
            onChange={(e) => setfcc(e.target.value)}
          />
        </div>
        
        <div className="glass__form__group">
          <input
            id="fch"
            className="glass__form__input"
            placeholder="Fuel Consumption in hwy (L/100 km)"
            required
            min="3"
            max="22"
            type="float"
            title="Fuel Consumption in highway"
            // pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={fch}
            onChange={(e) => setfch(e.target.value)}
          />
        </div>
        
        <div className="glass__form__group">
          <input
            id="fcco1"
            className="glass__form__input"
            placeholder="Fuel consumption comb(L/100km)"
            required
            min="3"
            max="29"
            type="float"
            title="Fuel Consumption combined(L/100km)"
            // pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={fcco1}
            onChange={(e) => setfcco1(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <input
            id="fcco2"
            className="glass__form__input"
            placeholder="Fuel consumption comb(mpg)"
            required
            min="8"
            max="75"
            type="number"
            title="Fuel Consumption combined(mpg)"
            // pattern="[0-9]+([\.,][0-9]+)?"
            value={fcco2}
            onChange={(e) => setfcco2(e.target.value)}
          />
        </div>
       
        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Glass

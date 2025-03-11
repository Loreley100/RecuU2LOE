import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [conador, setContador] = useState(0) //este contador es para llevar la cuenta de los pokemones, cambia con los botones 
  const[obj,setObj]=useState([])//arreglo de objeto de los pokemosnes
  const[error,setErros]=useState(false)//render de error

  useEffect(()=>{//este se va a ejecutara cada que el componenete contador se altere
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${conador}`)
    .then((response)=>
   {setObj(response.data.results)
   } 
    ).catch(error=>{
      setErros(true)
    })
    console.log(" hay eerrores")
  },[conador])

  return (
    <>
   
      {
        !error ?
        <div> 
          <ul>
          {//funcion map, para construir la lista,
          obj.map((item,index)=>(
            <div key={index}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${conador+index+1}.png`} alt="" />
              <p>{item.name}</p>
            </div>
          )
          
          )
        }
        </ul>
            <button type='button' onClick={()=> setContador(conador+10)}>ADELANTE</button>
        <button type='button' onClick={()=> setContador(conador-10)}>ATRAS</button>
        </div>
        :
        <p>Hay un error AL REDERIZAR</p>
      }
    
    
    </>
  )
}

export default App

import './App.css';
import Header from "./Header";
import CONFIG from "./config/config";
import {useState} from "react";
import Resultados from "./Resultados";
import { mock1 } from './constants/mock';

function App() {

  const [latitud, setLatitud] =useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);
  const [datos, setDatos] =useState(null);
  const [error, setError] = useState(null);


  const cargarDatos = async()=>{
    if(CONFIG.use_server===true){
      try {
        const response =await fetch(`${CONFIG.server_url}?lat=${latitud}&lon=${longitud}&appid=${CONFIG.api_key}`);
        if (response.status===200){
          const data = await response.json();
          setDatos(await data);
        } else{
          throw response  
        }
        }catch(error){
        console.log(error);
        setError({description:error.message});
      }
    } else{
      setDatos(mock1)
    }
  }

  return (
    <div className="App">
     <Header/>
     <h2 id="titulo">El tiempo</h2>
     <div className='formulario'>
        <div className='input'>
          Latitud<input id="latitud" type="number" defaultValue={CONFIG.default_lat} value={latitud} onChange={(e)=>setLatitud(e.target.value)}></input>
          Longitud<input id="longitud" type="number" defaultValue={CONFIG.default_lon} value={longitud} onChange={e=>setLongitud(e.target.value)}></input>
        </div>
        <button id="buscar" onClick={()=>cargarDatos()}>Bucar</button>
      </div>
        {error && <div id="error"><h1>Error</h1>Ha habido un error {error.description}</div>}
        {datos && <Resultados numitems={CONFIG.num_items} items={datos} />}
    </div>
  );  
}

export default App;

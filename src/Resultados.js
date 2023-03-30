import Tarjeta from "./Tarjeta";


export default function Resultados(props){

    function cortar(array,numitems){
        let nuevoArray =array;
        let finalarray=[];
        finalarray = (nuevoArray)?.slice(0,numitems)
        return finalarray
    }

    const arrayFinal = cortar(props.items.daily, props.numitems);


    return (
        <div id="resultados">
            <h2 id="timezone">Timezone:{props.items.timezone}</h2>
            <h2>El tiempo en los proximos días será:</h2>
            <div className="tarjetas">
                {arrayFinal?.map((card)=>{
                return (<Tarjeta key={props.items.daily.dt} tiempo={card}/>
                )})}
            </div>
        </div>
    )
}
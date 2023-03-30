export default function Tarjeta(props){

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '/' + month + '/' + year 
        return time;
      }
      const newdate= timeConverter(props.tiempo.dt)

    return (
        <div className="tarjeta" key={props.key}>
            <div className="dia">{newdate}</div>
            <img className="tiempoimg" src={`../${props.tiempo.weather[0].icon}@2x.png`} alt="tiempoimg"></img>
            <ul className="lista">
                <li>Temperatura: {props.tiempo.temp.day}</li>
                <li>Humedad: {props.tiempo.humidity}</li>
                <li>Viento: {props.tiempo.wind_speed}</li>
            </ul>
        </div>
    )
}
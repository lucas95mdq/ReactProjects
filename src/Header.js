export default function Header(props) {
    return (
        <div id="cabecera">
            <img className="logo" src={process.env.PUBLIC_URL + "/02d@2x.png"} alt="logo"></img>
            <h3 className="mensaje">Bienvenidos a la pagina del tiempo de Lucas Riveira</h3>

        </div>
    )
    }
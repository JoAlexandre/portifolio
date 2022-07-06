import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import applauses from  '../_assets/images/claps.jpg'
export default function Success(){
    return(
        <Container className="text-center d-flex  flex-column">
            <img src={applauses} alt="claps" className="success-img" />
            <h1>Sua mensagem foi recebida com sucesso!</h1>
            <span>Entraremos em Contato o mais rápido possivel.</span>
            <span className="mt-2">
            <Link to="/">
                <button  className="btn-blue" >
                    Página Inicial
                </button>
            </Link>
            </span>
        </Container>
    )
}

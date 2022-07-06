import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMG from '../_assets/icons/Logo/favicon.ico'
const page = window.location.pathname

export function Navegacao (){
    return (<div>
        <Navbar expand="lg" className='py-0'>
            <Container>
                <Navbar.Brand href="/"><img src={IMG} alt="icone" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/" className='a-classic'>Home</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projects/project1">Calculadora</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/projects/project2">Projeto1</NavDropdown.Item> */}
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="#about" className='a-classic'>About</Nav.Link>
                    </Nav>
                    {
                        !page.match('/contact') ?
                        <Nav className="mr-auto">
                            <Nav.Link href="/contact" className="btn-blue">Contato</Nav.Link>
                        </Nav>
                        :
                            ''
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
)}

export function Project(){

    const onClick = () => {
        window.location.replace('/contact')
    }

    return (
        <div className="bg-blue">
            <Container >
                <section className="start-project">
                    <span><h3>Precisando de Dev?</h3></span>
                    <span>Precisa de um desenvolvedor com experiencia em <i>React.js e Node.js</i>?</span>
                    <span>
                        <button  className="btn-blue" onClick={onClick} >
                            <Link to='/contact'>
                                Contato
                            </Link>
                        </button>
                    </span>
                </section>
            </Container>
        </div>
    )
}
export function Footer(){
    return(
    <div className="bg-blue">
        <Container className="text-center footer">
            <div className="row">
                <span>
                    <img src={IMG} alt="icone" style={{border: "2px white solid", borderRadius: "50%"}}/>
                </span>
                <p className="titulo2">Vivendo e aprimorando!</p>
            </div>
            <div className="icons-foter">
                    <a href="https://wa.me/5565992788066?text=Vim+atrav%C3%A9s+do+seu+Portif%C3%B3lio%21">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/jjose_alexandre/">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jose-alexandre-36786614a/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/JoAlexandre">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="mailto:joseadoes@gmail.com">
                    <i className="bi bi-envelope"></i>
                    </a>
            </div>
            <span>&copy; José Alexandre - {new Date().getFullYear()}</span>
        </Container>
    </div>
)}

export function PageTemplate({children}){
    return <div className="pageTemplate">
        <Navegacao />
        {children}
        {
        !page.match('/contact') ?
            <Project/>
            :
            ''
        }
        <Footer/>
    </div>
}





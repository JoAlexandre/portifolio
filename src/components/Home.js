import { Card, Col, Container,  Row } from "react-bootstrap";
import { PageTemplate } from "./Navegacao";
import DEV from '../_assets/images/dev.png'
import ENG from '../_assets/images/engineer.png'
import work1 from '../_assets/images/monitoramentoTickets.png'
import work2 from '../_assets/images/monitoramentoExtratos.png'
import work3 from '../_assets/images/monitoramentoVendas.png'
import work4 from '../_assets/images/relatorioSaldos.png'
import work5 from '../_assets/images/automacaoSQL.png'
import work6 from '../_assets/images/conferenciaItens.png'
import { FigureWork } from "./FigureWork";

const works = [
    {imgSrc: work1, description: 'Monitoramento de Tickets de Vendas.'},
    {imgSrc: work2, description: 'Monitoramento de Transferencias entre Lojas.'},
    {imgSrc: work3, description: 'Acompanhamento de Vendas das Filiais.'},
    {imgSrc: work4, description: 'Vizualização de Saldos de Produtos.'},
    {imgSrc: work5, description: 'Tabelas Automatizadas do SQL na WEB.'},
    {imgSrc: work6, description: 'Conferências de Produtos para Cliente.'},
]
export default function Home(){
    return(
    <PageTemplate>
        <Container className="text-center all-height">
            <h1 className="font-weight-bold">Engenheiro de Controle e Automação e Desenvolvedor Fullstack. </h1>
            <section>
                <p>Desenvolvimento de sistemas web, com foco em Node.js e Express.js no <i>Backend</i>, juntamente com <i>React.js, Jquery, Ajax e Bootstrap</i> na parte do Frontend</p>
            </section>
        </Container>

        <Section1></Section1>
        <Section2></Section2>
        <SectionProject></SectionProject>
        <SectionWorkDone></SectionWorkDone>

    </PageTemplate>
    )
}

function Section1(){
    return (
        <section className="bg-blue all-height text-center pading-over" style={{fontWeight:700, fontFamily:'monospace'}} >
            <Container id="about">
                <h1>Sobre</h1>
                <p>
                    Sou Engenheiro de Controle e Automação, formado pelo Instituto Federal de Educação, Ciências e Tecnologia de Mato Grosso. Sou tambem amante da programação, desde a faculdade. Meu foco sempre foi programar, desde robos de processos industriais a programas, softwares e websites.
                </p>
                <p>
                    Atualmente, sigo a minha paixão, que é desenvolver sistemas web. Utilizo das ferramentas e bibliotecas javascript disponiveis para faze-lo. Desenvolvo a parte do backend com <i>Node.js, Express.js e JavaScript</i>. Na Parte do Frontend, desenvolvo com as linguagens <i>HTML5, CSS3, Boostrap e Jquery</i> (para fazer consumo de API).
                </p>
                <p>
                    Assim como a tecnologia, estou em constante aprendizado. Atualmente, estou aprimorando os conhecimentos em <i>React.js, Next.js e Docker</i>. Em um futuro proximo, tambem deterei conhecimentos na linguagem <i>Python</i>.
                </p>
            </Container>
        </section>
    )
}

function Section2(){
    return(
        <section className="all-height">
            <Container className="py-4 marginOver">
                <Card>
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <Card className="card-eng-dev">
                                <Card.Img variant='top' src={ENG}></Card.Img>
                                <Card.Title className='mt-3'>Engenheiro</Card.Title>
                                <Card.Text className="mt-3">
                                    Calcular, Programar, Automatizar. Palavras chaves para um projeto de Engenharia.
                                </Card.Text>
                                <h5 className="text-blue mt-3">Linguagens</h5>
                                <p>ST, Ladder, IL, FBD e Grafcet.</p>
                                <h5 className="text-blue mt-5">Softwares</h5>
                                <ul className="ul-softwares">
                                    <li>SoMachine (Schneider)</li>
                                    <li>Unity (Schneider)</li>
                                    <li>Indusoft (Schneider)</li>
                                    <li>Tia Portal (Siemens)</li>
                                    <li>Matlab</li>
                                </ul>
                            </Card>
                        </Col>
                        <div className="line-div"></div>
                        <Col sm={12} md={12} lg={6}>
                            <Card className="card-eng-dev">
                                <Card.Img variant='top' src={DEV}></Card.Img>
                                <Card.Title className='mt-3'>Desenvolvedor</Card.Title>
                                <Card.Text className="mt-3">
                                    Criar Sites, ERP para empresas, automatizar processos administrativos e consultivos
                                </Card.Text>
                                <h5 className="text-blue mt-3">Linguagens</h5>
                                <p>JavaScript, Java e C.</p>
                                <h5 className="text-blue mt-5">Ferramentas Dev</h5>
                                <ul className="ul-softwares">
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Next.js</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                    <li>Jquery</li>
                                    <li>Chart.js</li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    )
}

function SectionWorkDone(){
    return(
        <section className="all-height my-5 text-center">
            <h2>Trabalhos Realizados</h2>
            <Container>
                <Row>
                {
                    works.map((item, index) =>
                        <FigureWork key={index} {...item}/>
                    )
                }
                </Row>
            </Container>
            <br />
        </section>
    )
}

function SectionProject(){
    return(
        <section className="bg-blue all-height" style={{marginBottom:'90px'}}>
            <Container>
            <h1>Tecnologias e Bibliotecas</h1>
                <Row>
                    <Col sm={12} lg={4}>
                        <Card className="card-text card-tecnologias my-3">
                            <Card.Body>
                                <Card.Title>Frontend</Card.Title>
                                <Card.Subtitle className="card-subtitle">Tecnologia/Framework</Card.Subtitle>
                                    <ul className="mt-2">
                                        <li>React.js</li>
                                        <li>Bootstrap</li>
                                        <li>Jquery</li>
                                        <li>Chart.js</li>
                                    </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                    <Card className="card-text card-tecnologias my-3">
                            <Card.Body>
                                <Card.Title>Backend</Card.Title>
                                <Card.Subtitle className="card-subtitle">Tecnologia/Framework</Card.Subtitle>
                                    <ul className="mt-2">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>Sequlize</li>
                                        <li>Axios/Fetch</li>
                                        <li>SQL</li>
                                        <li>Consumo de API</li>
                                    </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card className="card-text card-tecnologias my-3">
                            <Card.Body>
                                <Card.Title>Aprimorando</Card.Title>
                                <Card.Subtitle className="card-subtitle">Tecnologia/Framework</Card.Subtitle>
                                    <ul className="mt-2">
                                        <li>Next.js</li>
                                        <li>Docker</li>
                                        <li>Python</li>
                                        <li>AWS</li>
                                    </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

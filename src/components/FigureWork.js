import { Card, Col, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


export function FigureWork({imgSrc, description}){

    const onClick = () => {
        window.location.replace('/contact')
    }
    return(
        <Col sm={12} md={6} lg={4} className='py-2'>
            <Card className="work-done">
                <Figure className="figure">
                    <Figure.Image src={imgSrc} />
                        <Figure.Caption className="content">
                            <h5>{description}</h5>
                            <button className="btn-blue" onClick={onClick}>
                                <Link to='/contact'>
                                        +Info
                                </Link>
                            </button>
                        </Figure.Caption>
                </Figure>
            </Card>
        </Col>
    )
}

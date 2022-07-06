import { Col, Container, Row } from "react-bootstrap"
import { PageTemplate } from "./Navegacao"

export default function About(){
    return(
        <PageTemplate>
            <Container className="all-height">
                <Row>
                    <h1>Sou o José!</h1>
                    <Col sm={12} md={6}>
                        {/* <img src="" alt="" /> */}
                    </Col>
                </Row>
            </Container>
        </PageTemplate>
    )
}

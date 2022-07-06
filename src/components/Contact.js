import { Col, Container, Form, Row } from "react-bootstrap";
import { PageTemplate } from "./Navegacao";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import  ReCAPTCHA  from "react-google-recaptcha";

export default function Contact(){

    const [sendEmail, setToSendEmail] = useState({
        from_name:'',
        from_email:'',
        message:''
    })
    const [recaptcha, setRecaptcha] = useState(true)

    useEffect(() => {
        console.log(sendEmail);
    }, [sendEmail])


    const onSendEmail = (e) => {
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            sendEmail,
            process.env.REACT_APP_PUBLIC_KEY ).then((result) => {
                console.log(result);
                window.location.replace('/success')
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleChange = (e) =>{
        setToSendEmail({...sendEmail, [e.target.name]: e.target.value})
        console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_KEY);
    }
    const onRecaptchaChange = () => {
        setRecaptcha(!recaptcha)
    }

    return(
        <PageTemplate>
            <Container className="all-height text-center">
            <h1>Que bom que chegou até aqui. Digite seus dados que retornarei o quanto antes.</h1>

                <section className="section-form">
                    <Form onSubmit={onSendEmail} method='post'>
                        <Row>
                            <Col sm={12} md={6} >
                                <Form.Group className="mb-3 text-start" controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control name='from_name' onChange={handleChange} required/>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6}>
                                <Form.Group className="mb-3 text-start" controlId="form">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='from_email' onChange={handleChange} required/>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3 text-start" controlId="form">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as='textarea' name="message" onChange={handleChange} required/>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>

                            <button  className="btn-blue" disabled={recaptcha}>
                                Enviar
                            </button>
                            </Col>
                            <Col sm={12} >
                                <ReCAPTCHA
                                    className="recaptcha"
                                    sitekey="6LdGJ7YgAAAAADcumzsz3_lTJ7iOlfOPqq9h95w5"
                                    onChange={onRecaptchaChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </section>
            </Container>

        </PageTemplate>
        )
}

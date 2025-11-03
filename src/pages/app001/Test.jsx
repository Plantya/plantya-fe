import { Paper, Container } from "@mui/material";
import React from "react";
import { Button, Alert, Row, Col, Form } from "reactstrap";

export default function TestBootstrap() {
    return (
        <React.Fragment>
            <Container
                className="bg-info p-0"
                maxWidth={false} // Menghilangkan batasan lebar
            >
                <Row>
                    <Col>
                        <Alert color="primary">Bootstrap is working! 🎉</Alert>
                        <Button color="success">Test Button</Button>
                    </Col>
                </Row>


            </Container>
        </React.Fragment>
    );
}

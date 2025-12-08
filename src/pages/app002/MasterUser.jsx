import { Paper, Container, Box } from "@mui/material";
import React from "react";
import { Button, Alert, Row, Col, Form } from "reactstrap";

const MasterUser = () => {
    return (
        <React.Fragment>
            <Container
                sx={{
                    bgcolor: 'background.default'
                }}
                // className="bg-secondary p-0"
                maxWidth={false} // Menghilangkan batasan lebar
            >
                <Box style={{ height: '120vh' }} sx={{ bgcolor: 'background.paper' }}>
                    <Col>
                        {/* <Alert color="primary">Tab 🎉</Alert> */}
                        <Alert color="">Master User</Alert>
                        <Button color="success">User Page</Button>
                    </Col>
                </Box>


            </Container>
        </React.Fragment>
    );
}
export default MasterUser;

import React, { useEffect } from 'react';

import { Container, Table, Button } from 'react-bootstrap'
import Tablebody from '../../components/Table_body/Tablebody'
import DropImage from '../../components/DragImage/DragImage'

import { Storage } from 'aws-amplify';

function UploadPage(props) {

    useEffect(() => {
        Storage.get('Screenshot from 2020-06-20 20-43-19.png')
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <Container style={{ marginTop: "15%" }} >
            <Table style={{ border: "2px solid #483187" }} striped bordered hover>
                <tbody>
                    <tr>
                        <Tablebody >test</Tablebody>
                        <Tablebody><Button className="w-100" variant="danger">Delete</Button></Tablebody>
                        <Tablebody><Button className="w-100" style={{ backgroundColor: "#483187" }} >Share</Button></Tablebody>
                    </tr>
                </tbody>
            </Table>
            <DropImage />
        </Container>
    );
}

export default UploadPage;
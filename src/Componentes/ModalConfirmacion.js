import React from 'react'
import { Modal, Button, InputGroup } from "react-bootstrap";

const ModalConfirmacion = () => {
    return (
        <div>
            <Modal>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                
        </Modal.Header>
                <Modal.Body>xfsdfsadf</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalConfirmacion

import React, { useState } from 'react'
import { Form, Button, Dropdown, Modal  } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import ModalConfirmacion from './ModalConfirmacion';


const Formulario = ({addMovimiento, saldoFinal}) => {
    const [todo, setTodo] = useState({
        id:"",
        Nombre:"",
        Cantidad:"",
        Tipo_Movimiento:"Seleccionar",
        Estado: false,
    })

    const[Mensaje, setMensaje] = useState("");
    const[Titulo, setTitulo] = useState("");
    const [show, setShow] = useState(false); 
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);

    const handleSeleccion = (e) =>{
        //console.log(e);
        setTodo({...todo, ["Tipo_Movimiento"]: e})
    }

    const handleEnviar = (e) =>{
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.Cantidad > 0){
            if(todo.Tipo_Movimiento !== "" && todo.Nombre !== "" && todo.Cantidad > 0){
                if(todo.Tipo_Movimiento == "Gasto"){
                    if(saldoFinal >= todo.Cantidad){
                        if(todo.Nombre.trim() ){
                            addMovimiento({...todo, id:uuidv4()});
                            setTodo({...todo, Nombre:"", Cantidad: ""});
                            setTitulo("Registrado");
                            setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                            handleShow();
                        }
                    }else{
                        setTitulo("Error");
                        setMensaje("Saldo Insuficiente");
                        handleShow();
                    }
                }else{
                    if(todo.Nombre.trim() ){
                        addMovimiento({...todo, id:uuidv4()});
                        setTodo({...todo, Nombre:"", Cantidad: ""});
                        setTitulo("Registrado");
                        setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                        handleShow();
                    }
                }
            }else{
                alert("Ingresa Todos Los Campos");
            }
        }else{
            alert("La Cantidad Debe Ser Mayor a Cero");
        }  
    }

    return (
        <div>
        <br/>
        <br/>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            Tipo de Movimiento:
                <Dropdown onSelect={handleSeleccion} column="lg" lg={2}
                name="Tipo_Movimiento"
                >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" 
                    > {todo.Tipo_Movimiento}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item 
                        eventKey="Ingreso"
                        value={todo.Tipo_Movimiento}>Ingreso</Dropdown.Item>
                        <Dropdown.Item eventKey="Gasto"
                        value={todo.Tipo_Movimiento}> Gasto</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Label >Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre"
                name="Nombre"
                value={todo.Nombre}
                onChange={handleEnviar}
                />

                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="text" placeholder="Cantidad"
                name="Cantidad"
                value={todo.Cantidad}
                onChange={handleEnviar}
                />
                
                <Button variant="primary" type="submit">
                Add
                </Button>
                </Form.Group>
            </Form>


            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{Titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{Mensaje}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
        
    )
}

export default Formulario

/** 
import React, { useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid'
import { RiEdit2Line } from "react-icons/ri";

const ModalEditar = ({todo, updateMovimiento, saldoFinal, addMovimiento}) => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [info, setInfo] = useState({
        id:"",
        Nombre:"",
        Cantidad:"",
        Tipo_Movimiento:"Seleccionar",
        Estado: false,
    })

    const handleSeleccion = (e) =>{
        //console.log(e);
        setInfo({...info, ["Tipo_Movimiento"]: e})
    }

    const handleEnviar = (e) =>{
        //setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleActualizar =(e) =>{
        console.log(info.Nombre);
        console.log(info.Tipo_Movimiento);
        console.log(info.Cantidad);
    }
    


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(info.Cantidad > 0){
            if(info.Tipo_Movimiento !== "" && info.Nombre !== "" && info.Cantidad > 0){
                if(info.Tipo_Movimiento == "Gasto"){
                    if(saldoFinal >= info.Cantidad){
                        if(info.Nombre.trim() ){
                            addMovimiento({...todo, id:uuidv4()});
                            //setTodo({...todo, Nombre:"", Cantidad: ""});
                            //setTitulo("Registrado");
                            //setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                            handleShow();
                        }
                    }else{
                        //setTitulo("Error");
                        //setMensaje("Saldo Insuficiente");
                        //handleShow();
                    }
                }else{
                    if(info.Nombre.trim() ){
                        //addMovimiento({...todo, id:uuidv4()});
                        //setTodo({...todo, Nombre:"", Cantidad: ""});
                        //setTitulo("Registrado");
                        //setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                        //handleShow();
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
                {""}<Button variant="primary" onClick={handleShow}> 
                    <RiEdit2Line/>
                </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{todo.Nombre}</Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                    <Dropdown 
                        name="Tipo_Movimiento" onSelect={handleSeleccion}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> {todo.Tipo_Movimiento}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                            eventKey="Ingreso"
                            //value={info.Tipo_Movimiento}
                            >Ingreso</Dropdown.Item>
                            
                            <Dropdown.Item eventKey="Gasto"
                            //value={info.Tipo_Movimiento}
                            > Gasto</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" 
                   // value = {todo.Nombre || ''}
                    name="Nombre"
                    onChange={handleEnviar}
                    ></Form.Control>

                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text"
                    name="Cantidad"
                    />
                </Form>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleActualizar}>
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

export default ModalEditar
*/

import React, { useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid'
import { RiEdit2Line } from "react-icons/ri";

const ModalEditar = ({todo, updateMovimiento, saldoFinal, addMovimiento}) => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [info, setInfo] = useState({
        id:"",
        Nombre:"",
        Cantidad:"",
        Tipo_Movimiento:"Seleccionar",
        Estado: false,
    })

    const handleSeleccion = (e) =>{
        //console.log(e);
        setInfo({...info, ["Tipo_Movimiento"]: e})
    }

    const handleEnviar = (e) =>{
        //setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleActualizar =(e) =>{
        console.log(info.Nombre);
        console.log(info.Tipo_Movimiento);
        console.log(info.Cantidad);
    }
    


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(info.Cantidad > 0){
            if(info.Tipo_Movimiento !== "" && info.Nombre !== "" && info.Cantidad > 0){
                if(info.Tipo_Movimiento == "Gasto"){
                    if(saldoFinal >= info.Cantidad){
                        if(info.Nombre.trim() ){
                            addMovimiento({...todo, id:uuidv4()});
                            //setTodo({...todo, Nombre:"", Cantidad: ""});
                            //setTitulo("Registrado");
                            //setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                            handleShow();
                        }
                    }else{
                        //setTitulo("Error");
                        //setMensaje("Saldo Insuficiente");
                        //handleShow();
                    }
                }else{
                    if(info.Nombre.trim() ){
                        //addMovimiento({...todo, id:uuidv4()});
                        //setTodo({...todo, Nombre:"", Cantidad: ""});
                        //setTitulo("Registrado");
                        //setMensaje(`Se Registro el ${todo.Tipo_Movimiento}`);
                        //handleShow();
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
                {""}<Button variant="primary" onClick={handleShow}> 
                    <RiEdit2Line/>
                </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{todo.Nombre}</Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                    <Dropdown 
                        name="Tipo_Movimiento" onSelect={handleSeleccion}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> {info.Tipo_Movimiento}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                            eventKey="Ingreso"
                            value={info.Tipo_Movimiento}
                            >Ingreso</Dropdown.Item>
                            
                            <Dropdown.Item eventKey="Gasto"
                            value={info.Tipo_Movimiento}
                            > Gasto</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" 
                   // value = {todo.Nombre || ''}
                    name="Nombre"
                    onChange={handleEnviar}
                    ></Form.Control>

                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text"
                    name="Cantidad"
                    />
                </Form>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleActualizar}>
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

export default ModalEditar
import React from 'react'
import { ListGroup, InputGroup, Button, Badge } from 'react-bootstrap'
import ModalEditar from './ModalEditar';
import { RiDeleteBin2Fill } from "react-icons/ri";

function ItemMovimiento({todo, removeMovimiento, updateMovimientos, saldoFinal}) {

    const handleEliminar =() =>{
        removeMovimiento(todo.id);
    }

    return (
        <div>
            <InputGroup className="my-2">
                <InputGroup.Prepend>
                    <ListGroup.Item>
                        {todo.Nombre}
                    </ListGroup.Item>

                    <ListGroup.Item >
                        <Badge variant={ todo.Tipo_Movimiento === "Ingreso" ? "success": "warning"}>
                        {todo.Cantidad}
                        </Badge> 
                    </ListGroup.Item>
                </InputGroup.Prepend>

                <InputGroup.Prepend>  
                    <Button variant="primary" type="button"
                    onClick={handleEliminar}> <RiDeleteBin2Fill/>
                    </Button>
                </InputGroup.Prepend>

                <InputGroup.Prepend>  
                    <ModalEditar todo={todo} updateMovimientos={updateMovimientos} saldoFinal={saldoFinal}/>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
}

export default ItemMovimiento

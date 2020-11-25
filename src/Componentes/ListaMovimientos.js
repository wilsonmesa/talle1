
import React, { useState, useEffect } from 'react'
import { ListGroup, InputGroup, FormControl,Badge, Navbar  } from 'react-bootstrap'
import ItemMovimiento from './ItemMovimiento'

const ListaMovimientos = ({todos, removeMovimiento, updateMovimiento, filtrarMovimientos, searchMovimientos, saldoInicial, saldoFinal}) => {

    const[clave, setClave] = useState("");
    const[busqueda, setBusqueda] = useState("");

    useEffect(() => {
        //console.log("Clave "+clave);
        //console.log("Busqueda "+busqueda);
        if(busqueda === "" ){
            if(clave === "" || clave === "Todos"){
                filtrarMovimientos("Todos", busqueda);
            }else{
                filtrarMovimientos(clave, busqueda);
            }
        }else{
            if(clave === "" || clave === "Todos"){
                searchMovimientos(busqueda);
            }else{
                filtrarMovimientos(clave, busqueda);
            }
        }
    }, [clave, busqueda])

    const handleSeleccion=(e)=>{
        //console.log(e.target.value);
        //filtrarMovimientos(e.target.value);
        setClave(e.target.value);
       // handleBuscar();
    }

    const handleBusqueda=(e)=>{
        //console.log(e.target.value);
        //searchMovimientos(e.target.value);
 
        setBusqueda(e.target.value);
        //handleBuscar();
        
    }

    const handleBuscar=()=>{
        if(clave !== ""){
            console.log("Clave "+clave);
        
        }else{
            console.log("Busqueda "+busqueda);
        }
    }

    
    return (
        <div>
        <Navbar bg="#e3f2fd" variant="#e3f2fd">
            Lista de Movimientos 
        <Navbar.Brand >
        </Navbar.Brand>
        <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>       
            Contador:{` `}     
                <Badge variant="success" className="px-2">
                {todos.length}
                </Badge>
            </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
            <div onChange={handleSeleccion}>
            <input
            type="text"
            placeholder="Search"
            onChange={handleBusqueda}
            />

{" "} 
                <input type="radio" value="Todos" name="gender" /> Seleccio0n{" "} 
                <input type="radio" value="Ingreso" name="gender" /> Ingreso{" "} 
                <input type="radio" value="Gasto" name="gender" /> Gasto{" "} 
            </div>
     

            <ListGroup>
                {todos.map((todo) =>(
                    <ItemMovimiento key = {todo.id} 
                     todo={todo} 
                     removeMovimiento={removeMovimiento} 
                     updateMovimiento={updateMovimiento}
                     saldoFinal = {saldoFinal}
                     />
                ))
                }

            </ListGroup>
        </div>
    )
}

export default ListaMovimientos
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import Formulario from "./Componentes/Formulario";
import Header from './Componentes/Header';
import ListaMovimientos from "./Componentes/ListaMovimientos";


const App = () => {
  const[todos, setTodos] = useState([]);
  const[todos2, setTodos2] = useState([]);
  const[buscar, setBuscar] = useState("");
  const[saldoInicial, setSaldoInicial] = useState(0);
  const[saldoFinal, setSaldoFinal]= useState();


  useEffect(() => {
    setSaldoFinal(saldoInicial); 
    const total = todos
      .filter(todos => todos.Tipo_Movimiento === "Ingreso")
      .reduce((total, dato)=>(total+= Number(dato.Cantidad)), 0);
    const totalGasto = todos
      .filter(todos => todos.Tipo_Movimiento === "Gasto")
      .reduce((total2, dato2)=>(total2+= Number(dato2.Cantidad)), 0);
      console.log(total);
      console.log(totalGasto);
      var totalSaldo = Number(total) - Number(totalGasto) + Number(saldoInicial);
      setSaldoFinal(totalSaldo);
      console.log(totalSaldo);

  }, [todos])


  const addMovimiento =(mov) =>{
      setTodos([...todos, mov]);
      setTodos2([...todos2, mov]);
  }

  const removeMovimiento = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
    //setTodos2(todos);
  }

 /* const filtrarMovimientos = (op) =>{
    //setTodos(todos2);
    console.log(todos.length);
    console.log("todos2");
    console.log(todos2.length);
    if(op === "Todos"){
      //setTodos([...todos2, todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" && todo.Tipo_Movimiento === "Gasto")]);
      setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" || todo.Tipo_Movimiento === "Gasto")]);
    }else{
      //setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === op)]);
      setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === op)]);
    }
  } */

  const filtrarMovimientos = (op, busqueda) =>{
    //setTodos(todos2);
    console.log("opcion "+op);
    console.log("busqueda "+busqueda);
    //console.log(todos2.length);
    if(busqueda !== ""){
      if(op === "Todos" || op === ""){
        //setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" || todo.Tipo_Movimiento === "Gasto")]);
        searchMovimientos(busqueda);
      }else{
        setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === op && todo.Nombre.toLowerCase().includes(busqueda.toLowerCase()))]);
          //.filter((todo) => todo.Nombre.toLowerCase().includes(busqueda.toLowerCase()))]);
      }
    }else{
      if(op === "Todos" || op === ""){
        setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" || todo.Tipo_Movimiento === "Gasto")]);
        
      }else{
        setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === op)]);
      }
    }
  }

  const searchMovimientos = (busqueda) =>{
    console.log(busqueda);
    if(busqueda !== ""){
      //const bus = todos2.filter((todo) => todo.Nombre.toLowerCase().includes(busqueda.toLowerCase()));
      //console.log(bus);
      //setTodos([...todos2.filter((todo) => todo.Nombre.toLowerCase().includes(busqueda.toLowerCase()))]);
      setTodos([...todos2.filter((todo) => todo.Nombre.toLowerCase().includes(busqueda.toLowerCase()))]);
    }else{
      //setTodos([...todos2, todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" && todo.Tipo_Movimiento === "Gasto")]);
      setTodos([...todos2.filter((todo) => todo.Tipo_Movimiento === "Ingreso" || todo.Tipo_Movimiento === "Gasto")]);
    }
  }

  const addSaldo = (saldo) =>{
    setSaldoInicial(saldo);
    setSaldoFinal(saldo);
  }

  const updateMovimiento = (todo) =>{
    setTodos(todos.filter((mov) =>{
        if(mov.id === todo.id){
            return{
              ...todo,
              Nombre: todo.Nombre,
              Cantidad: todo.Cantidad,
            }
        }
    }));
  } 
  return (
    <div>
      <Container>

      <Header 
      saldoInicial ={saldoInicial}
      saldoFinal = {saldoFinal}
      addSaldo={addSaldo}/>´
      <Row>
        <Col>

        <Container>

      <div class="row">
        <div class="col-md-6">
          
        <div class="card">
          <div class="card-body"> 
          Agregar Movimiento
          <Formulario
          saldoFinal = {saldoFinal} 
          addMovimiento={addMovimiento}/>
        </div> </div> </div>



        <div class="col-md-5.5 offset-md-0.5">
        <div class="card" >
          <div class="card-body">
          <ListaMovimientos 
          todos={todos}
          removeMovimiento={removeMovimiento}
          updateMovimiento ={updateMovimiento}
          filtrarMovimientos = {filtrarMovimientos}
          searchMovimientos = {searchMovimientos}
          saldoInicial={saldoInicial}
          saldoFinal={saldoFinal}
          />
        </div></div></div>

      </div>
      </Container>
        </Col>
      </Row>
      <Row>
        
      </Row>

    </Container>
    </div>
  )
}

export default App

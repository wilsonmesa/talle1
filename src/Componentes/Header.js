import React, { useState } from 'react'
import { Navbar, Badge } from "react-bootstrap";

function Header ({saldoInicial, saldoFinal, addSaldo}) {
    const [saldo, setSaldo] = useState(0);

    const handleSaldo=(e)=>{
        //console.log(e.target.value);
        addSaldo(e.target.value);
    }

    return (
        <div>
            <Navbar bg="info" variant="info">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="https://i.pinimg.com/originals/7a/5e/c6/7a5ec639bc9afccb02dc1c7f900bd437.jpg"
            width="35"
            height="30"
            className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                Ingresa Salario inicial
                <Navbar.Text>
                <input
                type="text"
                placeholder="Search"
                onChange={handleSaldo}
                />
                    
                
                </Navbar.Text>
           
                 <Navbar.Text>

                    {" "} Saldo final{" "}
                    <Badge variant="success" className="px-2">
                        {saldoFinal}
                    </Badge>
                </Navbar.Text>
            </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default Header

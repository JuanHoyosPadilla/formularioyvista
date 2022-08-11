import React from 'react'
import styled from "styled-components";

export default function Libro({libro,handelEliminar}) {
  return (
    <Containerlibro>
        <h4>{libro.nombre}</h4>
        <p>{libro.precio}</p>
        <button onClick={() => handelEliminar(libro.nombre)}>Eliminar</button>
    </Containerlibro>
  )
}

const Containerlibro = styled.div `
    background-color: #605e5e;
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.3);

    h4{
        font-size: 20px;
        font-weight: 600;
    }
    button {
        border: none;
        padding: 0.5rem 0.5rem;
        font-size: 10px;
        background-color: red;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        :hover {
            background-color: #ff000089;
        }
    }
`;

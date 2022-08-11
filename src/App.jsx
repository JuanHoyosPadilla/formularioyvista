import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Libro from "./components/Libro";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const [libros, setLibros] = useState({ nombre: "", precio: 0 });
  const [dataLibros, setDataLibros] = useState([]);
  const MySwal = withReactContent(Swal);

  const handelchange = (e) => {
    setLibros({ ...libros, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!libros.nombre) {
      return MySwal.fire(
        "Debe ingresar el nombre",
        "Presiona ok",
        "error"
      );
    }
    if (!libros.precio) {
      return MySwal.fire(
        "Debe ingresar el precio",
        "Presiona ok",
        "error"
      );
    }
    setDataLibros([...dataLibros, libros]);
    e.target.reset();
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Libro agregado',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handelEliminar = (nombre) => {
    const newdato = dataLibros.filter((libro) => libro.nombre !== nombre);
    setDataLibros(newdato);
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Libro eliminada',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <SeccionForm>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del libro"
          onChange={(e) => handelchange(e)}
        />
        <input
          type="number"
          placeholder="Precio"
          name="precio"
          onChange={(e) => handelchange(e)}
        />
        <button type="submit">Agregar</button>
      </form>
      <div className="container-libros">
        {dataLibros.map((libro) => (
          <Libro
            key={libro.nombre}
            libro={libro}
            handelEliminar={handelEliminar}
          />
        ))}
      </div>
    </SeccionForm>
  );
}

const SeccionForm = styled.section`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(80vh, 100vh));
  grid-gap: 0.5rem;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #5f5c5c;
    padding: 1rem;
    height: 50vh;
    gap: 1.5rem;
    border-radius: 5px;
    align-items: center;
    box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.2);

    input {
      width: 90%;
      height: 2.5rem;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 1rem;
    }
    button {
      border: none;
      padding: 0.5rem 3rem;
      position: absolute;
      bottom: 10%;
      right: 6%;
      cursor: pointer;
      background-color: #15151561;
      color: white;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
      :hover {
        background-color: white;
        color: black;
      }
    }
  }

  .container-libros {
    background-color: #5f5c5c73;
    border-radius: 5px;
    height: 50vh;
    padding: 1rem;
    color: white;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
    ::-webkit-scrollbar {
      background-color: white;
      width: 5px;
      color: black;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      border: 3px solid #151515a0;
    }
  }
`;

export default App;

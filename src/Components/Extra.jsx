import React from "react";
import Table from "react-bootstrap/Table";

function Extra() {
  return (
    <>
      <Table striped bordered hover variant="light" className="shadow">
        <thead>
          <tr>
            <th>Servicios</th>
            <th>Cantidad</th>
            <th>Totales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quinceañeras</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Primer año</td>
            <td>6</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Primer año</td>
            <td>6</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Primer año</td>
            <td>6</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Primer año</td>
            <td>6</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Infantil</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Book Beauty</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Book Modelo</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Book Maternidad</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Book NewBorn</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Book Familiar</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Extra;

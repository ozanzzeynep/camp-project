import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CarService from "../services/CarService";

export default function CarList() {
  const [cars, setCars] = useState([]);

  //Component yüklendiğinde yapılmasını istediğimiz kodu içerisine yazarız.
  //Yani sayfa yüklendiğinde yapar.
  useEffect(() => {
    let carService = new CarService();
    carService.getCars().then((result) =>{
      setCars(result.data);
    } );
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Available</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            cars.map((car) => (
              <Table.Row key={car.id}>
                <Table.Cell>{car.brandName}</Table.Cell>
                <Table.Cell>{car.model}</Table.Cell>
                <Table.Cell>{car.year}</Table.Cell>
                <Table.Cell>{car.price}</Table.Cell>
                <Table.Cell>{String(car.available)}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

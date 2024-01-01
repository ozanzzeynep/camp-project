import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarService from "../services/CarService";

export default function CarDetail() {
  let { id } = useParams();

  const [car, setCar] = useState({});

  //Component yüklendiğinde yapılmasını istediğimiz kodu içerisine yazarız.
  //Yani sayfa yüklendiğinde yapar.
  useEffect(() => {
    let carService = new CarService();
    carService.getCarById(id).then((result) => setCar(result.data));
  }, []);

  return (
    <div>
      <div className="ui cards internally celled grid ">
        <div className="card eighteen wide column">
          <div className="content">
            <img
              alt="Elliot's avatar"
              className="right floated mini ui image"
              src={"/images/avatar/large/elliot.jpg"}
            />
            <div className="header">{car.id}</div>
            <div className="meta">{car.brandName} + {car.model}</div>
            <div className="description">
              Elliot requested permission to view your contact details
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

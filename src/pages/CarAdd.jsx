import { Formik } from "formik";
import React from "react";
import { Button, Form } from "semantic-ui-react";
import * as yup from "yup";
import TextInput from "../utilities/customFormControls/TextInput";
import CarService from "../services/CarService";

export default function CarAdd() {
  const initialValues = {
    brandId: "",
    model: "",
    year: "",
    price: "",
    isAvailable: "",
  };
  const schema = yup.object({
    brandId: yup.number().required("Marka Id'si giriniz"),
    model: yup.string().required("Model adı giriniz"),
    year: yup.number().required("Yıl giriniz"),
    price: yup.number().required("Araba fiyatı giriniz"),
    available: yup.string().required("Durum bilgisi giriniz"),
  });

  const submit = async (car) => {
    console.log("Submitting car:", car);
    let carService = new CarService();

    try {
      await carService.addCar(car);
      console.log("Car added successfully");
    } catch (error) {
      console.log("Error submitting data: ", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        
      >
        <Form className="ui form" onSubmit={submit} >
          <TextInput type="number" name="brandId" placeholder="brand Id" />
          <TextInput type="text" name="model" placeholder="model" />
          <TextInput type="number" name="year" placeholder="year" />
          <TextInput type="number" name="price" placeholder="price" />
          <TextInput type="text" name="isAvailable" placeholder="available" />

          <Button type="submit" color="green">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}



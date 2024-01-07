import axios from "axios"

export default class CarService{
    getCars(){
        return axios.get(`http://localhost:8080/api/cars/getAll`);
    }
    getCarById(carId){
        return axios.get(`http://localhost:8080/api/cars/${carId}`)
    }

    addCar(car){
        return axios.post(`http://localhost:8080/api/cars`, car)
    }
}

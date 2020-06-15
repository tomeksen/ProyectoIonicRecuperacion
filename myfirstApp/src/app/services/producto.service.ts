import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces';
import { IMotor, IInmobiliaria, ITecnologia } from '../interfaces';

@Injectable()

export class ProductoService{

    productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [
        {
          "id" : 1,
          "nombreProd": "Peugeot 208",
          "descProd": "Se vende duerme siempre en garaje",
          "cateProd": "Motor",
          "precioProd": 9500,
          "tipoVehiculo": "Coche",
          "kilometrosVehiculo": 100000,
          "anyoVehiculo": 2018
        },
        {
          "id" : 2,
          "nombreProd": "Casoplon",
          "descProd": "Se vende duerme siempre en garaje",
          "cateProd": "Inmobiliaria",
          "precioProd": 9500,
          "metrosCuadrados": 110,
          "numBanyos": 2,
          "numHabitaciones": 3,
          "localidad": "Valencia"
        },
        {
          "id" : 3,
          "nombreProd": "Xiaomi",
          "descProd": "Mejor telefono relación calidad-precio del mercado",
          "cateProd": "Tecnologia",
          "precioProd": 150,
          "estadoProducto": "Perfecto estado"
        }
      ]

    getProductos(): (IProducto | IMotor | IInmobiliaria | ITecnologia)[]{
        return this.productos;
    }

    getProducto(id : number) : (IProducto | IMotor | IInmobiliaria | ITecnologia){
        return this.productos.find(x => x.id == id);
    }
}
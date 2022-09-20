import { User } from "./user"

export class FoodOrder {
    id!:number

    status!:string

    totalPrice!:number

    orderCreatedTime!:string

    orderDeliveryTime!:string

    customerName!:string

    contactNumber!:string



    user=new User()



    constructor(){}
}

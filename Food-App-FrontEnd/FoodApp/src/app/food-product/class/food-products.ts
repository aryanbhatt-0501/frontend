import { User } from "src/app/FoodOrder/class/user"
import { Menu } from "src/app/Menu/class/menu"

export class FoodProducts {

    id!:number
    name!:string
    type!:string
    about!:string
    availability!:string
    price!:number

    menu=new Menu()

    user=new User()

    constructor(){}

}

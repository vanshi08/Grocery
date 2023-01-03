export class Groceries {
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    imageUrl!:string;
    tags?:string[];
}
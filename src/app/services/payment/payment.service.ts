import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {



  }



createOrder(order:any): Observable<any> {

      return this.http.post("http://localhost:8085/pg/createOrder", {

      customerName: order.name,

      email: order.email,

      phoneNumber: order.phone,

      amount: order.amount

      }, httpOptions);

  }

}

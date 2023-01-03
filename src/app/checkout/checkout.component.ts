import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { PaymentService } from '../services/payment/payment.service';


declare var Razorpay: any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  form: any = {};

  constructor(private http: HttpClient,

    private orderService:PaymentService) {



  }



  ngOnInit() {

   



  }



  sayHello() {

    alert("Hello ");

  }



  paymentId: string;

  error: string;

 

  options = {

    "key": "",

    "amount": "",

    "name": "Shantanu",

    "description": "Web Development",

    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpayment-options&psig=AOvVaw0og5E_FeznBOuMBtHMy8jF&ust=1671079415848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLi32Yym-PsCFQAAAAAdAAAAABAD",

    "order_id":"",

    "handler": function (response :any){

      var event = new CustomEvent("payment.success",

        {

          detail: response,

          bubbles: true,

          cancelable: true

        }

      );    

      window.dispatchEvent(event);

    }

    ,

    "prefill": {

    "name": "",

    "email": "",

    "contact": ""

    },

    "notes": {

    "address": ""

    },

    "theme": {

    "color": "#3399cc"

    }

    };

 

    onSubmit(): void {

      this.paymentId = '';

      this.error = '';

      this.orderService.createOrder(this.form).subscribe(

      data => {

        this.options.key = data.secretId;

        this.options.order_id = data.razorpayOrderId;

        this.options.amount = data.applicationFee; //paise

        // this.options.prefill.name = "Shantanu";

        this.options.prefill.email = "shantanu@gmail.com";

        this.options.prefill.contact = "999999999";

       

        if(data.pgName ==='razor2') {

          this.options.image="";

          var rzp1 = new Razorpay(this.options);

          rzp1.open();

        } else {

          var rzp2 = new Razorpay(this.options);

          rzp2.open();

        }

       

               

        rzp1.on('payment.failed', function (response:any){    

          // Todo - store this information in the server

          console.log(response);

          console.log(response.error.code);    

          console.log(response.error.description);    

          console.log(response.error.source);    

          console.log(response.error.step);    

          console.log(response.error.reason);    

          console.log(response.error.metadata.order_id);    

          console.log(response.error.metadata.payment_id);

          //this.error = response.error.reason;

        }

        );

      }

      ,

      err => {

        this.error = err.error.message;

      }

      );

    }



    @HostListener('window:payment.success', ['$event'])

    onPaymentSuccess(event:any): void {

       console.log(event.detail);

    }
}

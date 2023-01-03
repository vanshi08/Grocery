import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(

    private route: ActivatedRoute,

      private router: Router,

        private userService: UserService) {

    this.user = new User();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  user: User;



 



  onSubmit() {

    this.userService.save(this.user).subscribe(result => this.gotologin());

  }

  gotologin(): void {

    this.router.navigate(['/home']);  }
  }

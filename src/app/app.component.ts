import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-form-1';
@ViewChild('ecommerce') ecommerce!:NgForm

ratingArr=[1,2,3,4,5]

  onSubmit(){
    if(this.ecommerce.invalid){
      this.ecommerce.control.markAllAsTouched()
    }else{
      this.ecommerce.reset()
    }

  }
}
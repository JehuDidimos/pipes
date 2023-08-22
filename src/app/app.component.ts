import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = '';
  paymentDate = '';
  paymentAmount = 0;

  onNameChange(newName:any){
    this.name = newName.value;
  }

  onDateChange(newDate: any){
    this.paymentDate = newDate.value;
  }

  onAmountChange(newAmount: any){
    this.paymentAmount = parseFloat(newAmount.value);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.css']
})
export class OurProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// function calculate(){
//   amount=document.getElementById('amount').value
//   rate=document.getElementById('rate').value
//   time=document.getElementById('time').value
//   const interest = (amount * (rate * 0.01)) / time;
//   let emi = ((amount / time) + interest).toFixed(2);
//   emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   document.getElementById("output").innerHTML=emi
// }

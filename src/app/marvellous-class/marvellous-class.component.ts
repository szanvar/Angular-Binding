import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-class',
  templateUrl: './marvellous-class.component.html',
  styleUrls: ['./marvellous-class.component.css']
})
export class MarvellousClassComponent implements OnInit 
{
  public MyClass = "success";
  
  public IsSet = false;

  public choice : string[] = [];
  public myVeg = "veg";
  public myNonveg = "nonveg"; 

  veg = ["Pulav","Roti","Sabji","Salad"];
  nonveg = ["Nonveg","Nonveg","Nonveg","Nonveg"];
  fun(value : any)
  {
    if(value = this.veg)
      this.choice = this.veg;
    else
      this.choice = this.nonveg;   
  }
  constructor() { }

  ngOnInit() {
  }

}

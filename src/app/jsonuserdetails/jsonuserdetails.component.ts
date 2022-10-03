import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonuserdetails',
  templateUrl: './jsonuserdetails.component.html',
  styleUrls: ['./jsonuserdetails.component.scss']
})
export class JsonuserdetailsComponent implements OnInit {

  jsonObject = {
    id: 1,
    firstName: "santhiya",
    lastName: 'santhosh'
  } ;
  arrayObj: any[] = [
    {
      id: 1,
      firstName: "santhiya",
      lastName: 'santhosh'
    },
    {
      id: 2,
      firstName: "sangeetha",
      lastName: 'mani'
    },
    {
      id: 3,
      firstName: "banumathi",
      lastName: 'murugesan'
    },
    {
      id: 4,
      firstName: "poorima",
      lastName: 'ravi'
    },
    {
      id: 5,
      firstName: "maha",
      lastName: 'rava'
    }
    
  ]

 
  

  constructor() {}

  // (this.jsonObject = <JSON>this.arrayObj);
  
  ngOnInit(): void {

  }
  
  

  

  
  }
  



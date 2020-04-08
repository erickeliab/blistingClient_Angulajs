import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BusinessServiceService } from 'src/app/services/business-service.service';
import { Business } from 'src/app/Models/Business';


@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.css']
})
export class AllservicesComponent implements OnInit {

  constructor(private all:BusinessServiceService) { }
   Businesses:Business[];

   public data:boolean = false;
   public one:boolean = false;
   public del:boolean = false;
   public new:boolean = false;
   public updat:boolean = false;

   temp:Business;

  ngOnInit(): void {

    this.all.getBusinesses().subscribe( one => {
        
      this.Businesses = one;
    });

    
  }

  dash(){
    
   this.updat = false;
   this.data =  true;
   this.one = false;
   this.del = false;
   this.new = false;
  }

  oneser(body){
    this.temp = body;

   
   this.updat = false;
   this.data = false;
   this.one = true;
   this.del = false;
   this.new = false;
  }

  update(id){
    console.log(id);
  }

  delser(id){
    console.log(id);
  }

  newl(){
    this.updat = false;
    this.data =  false;
    this.one = false;
    this.del = false;
    this.new = true;
  }

  profed(){

  }
}

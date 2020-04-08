import { Component, OnInit } from '@angular/core';
import { Business } from '../../Models/Business';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BusinessServiceService } from 'src/app/services/business-service.service';


@Component({
  selector: 'app-blist',
  templateUrl: './blist.component.html',
  styleUrls: ['./blist.component.css']
})
export class BlistComponent implements OnInit {

  constructor(private bs:BusinessServiceService ) { }

  Businesses:Business[];

  ngOnInit(): void {
    
    this.bs.getBusinesses().subscribe( bus => {
      this.Businesses = bus;
    });
  }

}

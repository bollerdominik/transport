import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service";
import {TransportModel} from "../transport.model";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public busList: TransportModel[];
  public tramList: TransportModel[];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBus().subscribe(data => this.busList = data);
    this.apiService.getTram().subscribe(data => this.tramList = data);
  }

}

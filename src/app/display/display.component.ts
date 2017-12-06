import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service";
import {TransportModel} from "../transport.model";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public busListFromBern: TransportModel[];
  public tramListFromBern: TransportModel[];
  public trainListFromBern: TransportModel[];
  public busListFromHome: TransportModel[];
  public tramListFromHome: TransportModel[];
  public trainListFromHome: TransportModel[];



  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBusFromBern().subscribe(data => this.busListFromBern = data);
    this.apiService.getTramFromBern().subscribe(data => this.tramListFromBern = data);
    this.apiService.getTrainFromBern().subscribe(data => this.trainListFromBern = data);
    this.apiService.getBusFromHome().subscribe(data => this.busListFromHome = data);
    this.apiService.getTramFromHome().subscribe(data => this.tramListFromHome = data);
    this.apiService.getTrainFromHome().subscribe(data => this.trainListFromHome = data);

  }

}

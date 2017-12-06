import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {TransportModel} from "./transport.model";
export const URL = 'http://transport.opendata.ch/v1/connections?';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {


  constructor(private http: Http) {
  }

  getBus(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=untermattweg&to=Schanzenstrasse&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = []
      list.push(new TransportModel(data.connections[0].from.station.name, data.connections[0].to.station.name,
        data.connections[0].from.departure, data.connections[0].to.arrival, data.connections[0].from.delay));
      list.push(new TransportModel(data.connections[1].from.station.name, data.connections[1].to.station.name,
        data.connections[1].from.departure, data.connections[1].to.arrival, data.connections[1].from.delay));
      return list;
      }).catch(e => {
        return Observable.throw("error bus");
    });
  }
  getTram(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Betlehem Säge&to=Hirschengraben&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = []
      list.push(new TransportModel(data.connections[0].from.station.name, data.connections[0].to.station.name,
        data.connections[0].from.departure, data.connections[0].to.arrival, data.connections[0].from.delay));
      list.push(new TransportModel(data.connections[1].from.station.name, data.connections[1].to.station.name,
        data.connections[1].from.departure, data.connections[1].to.arrival, data.connections[1].from.delay));
      return list;
    }).catch(e => {
      return Observable.throw("error tram");
    });
  }

}

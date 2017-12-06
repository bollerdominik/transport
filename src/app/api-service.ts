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

  getBusFromHome(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=untermattweg&to=Schanzenstrasse&limit=3&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
          connection.from.departure, connection.to.arrival, connection.from.delay));
      }
      return list;
      }).catch(e => {
        return Observable.throw("error bus");
    });
  }
  getTramFromHome(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Betlehem Säge&to=Hirschengraben&limit=3&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
          connection.from.departure, connection.to.arrival, connection.from.delay));
      }
      return list;
    }).catch(e => {
      return Observable.throw("error tram");
    });
  }
  getTrainFromHome(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Stöckacker&to=Bern&limit=6&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        if (connection.to.station.name === "Bern") {
          list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
            connection.from.departure, connection.to.arrival, connection.from.delay));
        }
        if (list.length === 2) {
          return list;
        }
      }
      return list;
    }).catch(e => {
      return Observable.throw("error tram");
    });
  }
  getBusFromBern(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Schanzenstrasse&to=untermattweg&limit=3&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
          connection.from.departure, connection.to.arrival, connection.from.delay));
      }
      return list;
    }).catch(e => {
      return Observable.throw("error bus");
    });
  }
  getTramFromBern(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Hirschengraben&to=Betlehem Säge&limit=3&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
          connection.from.departure, connection.to.arrival, connection.from.delay));
      }
      return list;
    }).catch(e => {
      return Observable.throw("error tram");
    });
  }
  getTrainFromBern(): Observable<TransportModel[]> {
    return this.http.get(URL + 'from=Bern&to=Stöckacker&limit=6&fields[]=connections/from&fields[]=connections/to').map(model =>  {
      const data = model.json();
      const list = [];
      for (const connection of data.connections) {
        if (connection.from.station.name === "Bern") {
          list.push(new TransportModel(connection.from.station.name, connection.to.station.name,
            connection.from.departure, connection.to.arrival, connection.from.delay));
          if (list.length === 2) {
            return list;
          }
        }
      }
      return list;
    }).catch(e => {
      return Observable.throw("error tram");
    });
  }

}

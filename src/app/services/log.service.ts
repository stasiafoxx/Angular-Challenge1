import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, observable } from 'rxjs';


import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Fallout 76', date: new Date ('11/14/18')},
      {id: '2', text: 'Shadow of the Tomb Raider', date: new Date ('9/14/2018')},
      {id: '3', text: 'Marvel Spider Man', date: new Date ('9/7/2018')}
    ];
  }

  getLogs() {
    return of (this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}

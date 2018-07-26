import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated New Application', date: new Date ('7/26/2018 2:21')},
      {id: '2', text: 'Set up Repository', date: new Date ('7/26/2018 2:59')},
      {id: '3', text: 'Generated Components', date: new Date ('7/26/2018 10:31')}
    ];
  }

  getLogs() {
    return this.logs;
  }
}

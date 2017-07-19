import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

declare var CRMService: any;

@Injectable()
export class CRMServices {
  private TabsUrl = './ArrayTabs';  // URL to web api
  constructor(private http: Http) { }

  // for tree view to be implemented in second phase
  getTreeView() {
    const service = new CRMService();
    return service.getTreeView();
  }
}

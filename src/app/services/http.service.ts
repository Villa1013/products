import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

      constructor(private _http: Http) {}
      request(url:string) {
        return this._http.get(url)
          .map(res => res.json())
      }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getLocation(inputText) {
    let headerObj = new HttpHeaders();
    headerObj = headerObj.set('Access-Control-Allow-Origin', '*');
    headerObj = headerObj.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headerObj = headerObj.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    console.log('....', headerObj);
    const key = 'AIzaSyBBuMXjKmLMAMn7Hn7VSlVeoeMAxQe7LFw';
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + inputText + '&types=(cities)' + '&key=' + key, { headers: headerObj });
  }
}

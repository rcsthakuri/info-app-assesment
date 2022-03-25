import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  FormObj = {
    name: '',
    email: '',
    dob: '',
    avatar: '',
    country: '',
    id: ''
  }
  countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'India',
    'Nepal'
  ] 
  hidden = true;
  endPointError = false;
  smsg = '';
  errmsg = '';

  sendPostReq (data, url, reqType): Number{ 
    let retData: Number;
     if (reqType === 'post') {
          this.http.post(url, data).subscribe(
            (res) => {},
            err => {retData = -1;},
            () => {retData = 1;}   
          );
      }
     else if(reqType == 'patch') {
          this.http.patch(url, data).subscribe(
            (res) => {},
            err => {retData = -1},
            () => {retData = 1;}   
          );
     }
    console.log('haha' + retData);
    return retData;
  }
}   

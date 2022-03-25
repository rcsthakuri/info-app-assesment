import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';



@Component({
    selector: 'create-component',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CreateComponent{
    @Input() test: string;
    personalInfoForm;
    res;
    smsg;
    errmsg;
    constructor(private formBuilder: FormBuilder, public ds: DataService, private http: HttpClient) {
            this.personalInfoForm = this.formBuilder.group({
                name: ["",  [Validators.required, Validators.minLength(10)]],
                email: ["", [Validators.required, Validators.email]],
                // dob: ["", [Validators.pattern('^[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}$')]],
                dob: ["", [Validators.required]],
                avatar: ["", [Validators.required]],
                country: ["", [Validators.required]]
             });  
    }
    get name() {
        return this.personalInfoForm.get("name");
    }
    get email() {
        return this.personalInfoForm.get("email"); 
    }
    get dob() {
        return this.personalInfoForm.get("dob");
    }
    get avatar() {
        return this.personalInfoForm.get("avatar");
    }
    // get country() {
    //     return this.personalInfoForm.get("country");
    // }
    countryList = this.ds.countryList;
    onCreatePerson(personData: {name: string; email: string; dob: string; avatar: string; country: string}) {
        console.log(personData);
        // let header = new HttpHeaders();
        // header.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
        // this.http.patch('https://tekdi-challenges.appspot.com/api/People/1/', {'headers': header})
        // .subscribe();
        console.log(personData);
        this.res = this.ds.sendPostReq(personData, 'https://tekdi-challenges.appspot.com/api/People/', 'post')
        console.log(this.res);
        if (this.res == -1) { this.errmsg = "Unable to connect to end point"}
        else if(this.res == 1) { this.smsg = "Successfully submitted to endpoint"; this.personalInfoForm.reset();}
    }
}
import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'edit-component',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class EditComponent{
    @Input() test: string;
    personalEditInfoForm;
    res;
    constructor(private formBuilder: FormBuilder, public ds: DataService, private router: Router) {
            this.personalEditInfoForm = this.formBuilder.group({
                name: [""],
                email: [""],
                dob: [""],
                avatar: [""],
                country: [""]
             });  
    }
    countryList = this.ds.countryList;

    onEditPerson(personData: {name: string; email: string; dob: string; avatar: string; country: string,}) {
        this.res = this.ds.sendPostReq(personData, 'https://tekdi-challenges.appspot.com/api/People/', 'patch')
        if(this.res == -1)
        {
            this.router.navigate(['view']); this.ds.endPointError = true;
        }
        else if(this.res == 1)
        {
            this.ds.hidden=true; this.ds.endPointError = false; 
        }
    }
}
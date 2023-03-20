import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  formdata: any;
  data: any;
  id = "";

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.load()
  }


  load() {
    this.id = "";
    this.api.get("farmers").subscribe((result: any) => {
      console.log(result.data);
      this.data = result.data

    })
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("", Validators.compose([Validators.required])),
      landspace: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })

  }



  edit(id: any) {
    this.id = id;
    this.api.get("farmers/" + id).subscribe((result: any) => {
      console.log(result.data)
      this.formdata.patchValue({
        name: result.data.name,
        email: result.data.email,
        mobileno: result.data.mobileno,
        landspace: result.data.landspace,
        password: result.data.password
      })
    })
  }





  submit(data: any) {
    if (this.id == "") {
      this.api.post("farmers", data).subscribe((data: any) => {
        this.load()
      })
    }
    else {
      this.api.put("farmers/" + this.id, data).subscribe((data: any) => {
        this.load()
      })
    }
  }


}




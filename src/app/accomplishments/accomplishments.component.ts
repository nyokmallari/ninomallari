declare var $: any;

import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-accomplishments',
  standalone: true,
  imports: [ReactiveFormsModule, SidenavComponent, TopnavComponent],
  providers: [CookieService],
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.scss',
})
export class AccomplishmentsComponent implements OnInit {
  selectedFile: any;
  cookieService = inject(CookieService);
  formData: any;
  userDetails: any;
  applyForm: any;

  constructor(private ds: DataService, private route: Router) {}

  ngOnInit(): void {
    this.formData = new FormData();

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.applyForm = new FormGroup({
      accomTitle: new FormControl(null, Validators.required),
      accomDesc: new FormControl(null, Validators.required),
      accomImg: new FormControl(null, Validators.required),
    });
  }

  openModalpopup() {
    $('#exampleModalCenter').modal('show');
  }

  closePopup() {
    $('#exampleModalCenter').modal('hide');
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  Insert() {
    this.formData.append('accomTitle', this.applyForm.value.accomTitle);
    this.formData.append('accomDesc', this.applyForm.value.accomDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('accomImg', this.selectedFile);

    this.ds.sendRequestWithMedia('addaccomplishment', this.formData).subscribe(
      (response) => {
        console.log('Application submitted successfully:', response);
        console.log(this.applyForm);
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    );
  }
}

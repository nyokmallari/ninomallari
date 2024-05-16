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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ReactiveFormsModule, SidenavComponent, TopnavComponent, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent implements OnInit {
  selectedFile: any;
  cookieService = inject(CookieService);
  formData: any;
  userDetails: any;
  applyForm: any;
  studentList: any = [];
studentPortfolio: any ={};
baseAPI:string = 'http://localhost/unfold-api'
  constructor(private ds: DataService, private route: Router) {}

  ngOnInit(): void {
    this.formData = new FormData();

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));


    this.applyForm = new FormGroup({
      aboutText: new FormControl(null, Validators.required),
      aboutImg: new FormControl(null, Validators.required),
    });

    this.ds.getRequestWithParams("view-portfolio",{id: this.userDetails.studentID}).subscribe(
      (response: any) => {
        this.studentPortfolio = response
        console.log('View Portfolio details:', response);
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    )
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  Insert() {

    this.formData.append('aboutText', this.applyForm.value.aboutText);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('aboutImg', this.selectedFile);

    this.ds
      .sendRequestWithMedia('addaboutme', this.formData)
      .subscribe(
        (response) => {
          // Handle successful response here if needed
          console.log('Application submitted successfully:', response);
          console.log(this.applyForm);
        },
        (error) => {
          // Handle error response here if needed
          console.error('Error submitting application:', error);
        }
      );
  }


  openModalpopup() {
    $('#exampleModalCenter').modal('show');
  }

  closePopup() {
    $('#exampleModalCenter').modal('hide');
  }

  openModalpopupbio() {
    $('#exampleModalCenterBio').modal('show');
  }

  closePopupbio() {
    $('#exampleModalCenterBio').modal('hide');
  }
}

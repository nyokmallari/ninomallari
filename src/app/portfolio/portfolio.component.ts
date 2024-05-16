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
  selector: 'app-portfolio',
  standalone: true,
  imports: [ReactiveFormsModule, SidenavComponent, TopnavComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  selectedFile: any;
  cookieService = inject(CookieService);
  formData: any;
  applyForm: any;
  userDetails: any;
  studentPortfolio: any ={};
  selectedProjectTitle: string = '';
  selectedProjectDesc: string = '';
  selectedProjectImg: string = '';
  selectedProjectId: any;
  baseAPI:string = 'http://localhost/unfold-api'
  // constructor(private ds: DataService, private route: Router) {}
  constructor(private ds: DataService){}

  ngOnInit(): void {
    this.formData = new FormData();

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.applyForm = new FormGroup({
      proTitle: new FormControl(null, Validators.required),
      proDesc: new FormControl(null, Validators.required),
      proImg: new FormControl(null, Validators.required),
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
    this.formData.append('projectTitle', this.applyForm.value.proTitle);
    this.formData.append('projectDesc', this.applyForm.value.proDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('projectImg', this.selectedFile);

    this.ds
      .sendRequestWithMedia('add-project', this.formData)
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
  Edit() {
    // Assuming you have access to the projectId
    const projectId = this.selectedProjectId; // Update this with the actual variable holding the projectId
  
    this.formData.append('projectID', this.applyForm.value.projectID);
    this.formData.append('projectTitle', this.applyForm.value.proTitle);
    this.formData.append('projectDesc', this.applyForm.value.proDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('projectImg', this.selectedFile);
  
    this.ds
      .sendRequestWithMedia('edit-project', this.formData)
      .subscribe(
        (response) => {
          // Handle successful response here if needed
          console.log('Project edited successfully:', response);
          console.log(this.applyForm);
        },
        (error) => {
          // Handle error response here if needed
          console.error('Error editing project:', error);
        }
      );
  }
  

  
  openModalpopup() {
    $('#exampleModalCenter').modal('show');
  }

  closePopup() {
    $('#exampleModalCenter').modal('hide');
  }
  // editopenModalpopup() {
  //   $('#editModalCenter').modal('show');
  // }

  editopenModalpopup(projectTitle: string, projectDesc: string, projectImg: string, projectId:any) {
    this.selectedProjectTitle = projectTitle; 
    this.selectedProjectDesc = projectDesc; 
    this.selectedProjectImg = projectImg; 
    this.selectedProjectId = projectId; 
    $('#editModalCenter').modal('show');
    // You can also perform other actions related to opening the modal popup here
  }

  editclosePopup() {
    $('#editModalCenter').modal('hide');
  }
}

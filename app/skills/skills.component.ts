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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent implements OnInit{
  cookieService = inject(CookieService);
  formData: any;
  userDetails: any;
  applyForm: any;
  selectedskillTitle: string = "";
  selectedskillDesc: string = "";
  selectedskillId: string = "";
  studentPortfolio: any ={};

  baseAPI:string = 'http://localhost/unfold-api'
  constructor(private ds: DataService, private route: Router) {}


  ngOnInit(): void {
    this.formData = new FormData();
   

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.applyForm = new FormGroup({
      skillTitle: new FormControl(null, Validators.required),
      skillDesc: new FormControl(null, Validators.required),
      // skillID: new FormControl(null)
    });

    this.applyForm.setValue({
      skillTitle: this.selectedskillTitle,
      skillDesc: this.selectedskillDesc,
      
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

  // applyForm = new FormGroup ({
    // skillTitle: new FormControl(null, Validators.required),
    // skillDesc: new FormControl(null, Validators.required)
  // })

  Insert() {
    this.formData.append('skillTitle', this.applyForm.value.skillTitle);
    this.formData.append('skillDesc', this.applyForm.value.skillDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    skillID: new FormControl(null)

    this.ds.sendRequestWitoutMedia('addskill', this.formData).subscribe(
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

  Edit(skillID: string) {
    this.formData.append('skillTitle', this.applyForm.value.skillTitle);
    this.formData.append('skillDesc', this.applyForm.value.skillDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('skillID', this.studentPortfolio.skillID);
    console.log('Selected Skill ID:', this.selectedskillId);
    this.ds.sendRequestWitoutMedia('editskill', this.formData).subscribe(
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

  
  openModalpopup(){
    $('#exampleModalCenter').modal('show')
  }
  
  closePopup(){
    $('#exampleModalCenter').modal('hide')
  }


  editopenModalpopup(skillTitle: string, skillDesc: string, skillID:any) {
    this.selectedskillTitle = skillTitle; 
    this.selectedskillDesc = skillDesc; 
    this.selectedskillId = skillID;; 
    $('#editModalCenter').modal('show');
    this.applyForm.get('skillID').setValue(this.selectedskillId);
    // You can also perform other actions related to opening the modal popup here
  }

  editclosePopup() {
    $('#editModalCenter').modal('hide');
  }


}

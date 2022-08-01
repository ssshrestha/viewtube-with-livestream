import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  selectedVisiblityOption = "Public";
  selectedDistibutionOption = "Only on Monetized Platform";
  selectedLicenseOption = "Creative Common License";

  keywords = new Set<string>();
  formControl = new FormControl(['']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }
  constructor(private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
  }

  getUploadDetails(uplodFormDetails: NgForm) {
    console.log(uplodFormDetails.value);
    uplodFormDetails.reset();
    this.snackBar.open("Your video has been uploaded successfully", "", { duration: 5000 });
  };

}



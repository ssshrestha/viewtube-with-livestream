import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  keywords = new Set<string>();
  formControl = new FormControl(['']);

  liveStreamForm !: FormGroup;

  constructor(formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.liveStreamForm = formBuilder.group({
      'streamTitle': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'streamStartDate': new FormControl('', Validators.required),
      'streamStartTime': new FormControl('', Validators.required),
      'streamEndTime': new FormControl('', Validators.required),
      'streamEndDate': new FormControl('', Validators.required),
      'streamDetails': new FormControl()
    })
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  saveLiveStreamDetails() {
    console.log(this.liveStreamForm.value);
    this.liveStreamForm.reset();
    this.snackBar.open("Your live stream event is scheduled successfully", "", { duration: 5000 });
  }

  ngOnInit(): void {
  }
}

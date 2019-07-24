import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-child-dialog',
  templateUrl: './child-dialog.component.html',
  styleUrls: ['./child-dialog.component.css']
})
export class ChildDialogComponent {
  childAccount: boolean;

  constructor(
    public dialogRef: MatDialogRef<ChildDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public child: Child) { }

    onNoClick(): void {
    this.dialogRef.close();
  }

}

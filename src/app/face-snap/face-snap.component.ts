import { Component, Input, OnInit  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  buttonText!: string;
  @Input() faceSnap!: FaceSnap;
  userHasSnapped: boolean | undefined;
    
  ngOnInit(){
  this.buttonText = "Oh Snap!"
  }
  onSnap() {
    if (this.buttonText == "Oh Snap!"){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!"
      this.userHasSnapped = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
      this.userHasSnapped = false;
    }
   
  }
}



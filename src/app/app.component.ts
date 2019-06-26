import { Component } from '@angular/core';
import { Photo } from './photo/photo.model';
import { PhotoService } from './photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Photos:Photo[];

  constructor(private photoService: PhotoService){
      photoService.listPhotos().subscribe(
      photoDB =>this.Photos = photoDB,
      erroDB => console.log(erroDB) 
    );
  }
  

}

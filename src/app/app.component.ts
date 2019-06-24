import { Component } from '@angular/core';
import { Photo } from './photo/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos:Photo[]=[
    {
        id: 1,
        titulo:"FOTO 1",
        alt:"angular",
        url:"https://img.alicdn.com/imgextra/i1/6000000007540/TB24gJkuqSWBuNjSsrbXXa0mVXa_!!6000000007540-0-tbvideo.jpg",
        descricao:"mULHER"
    },
    {
        id: 2,
        titulo:"FOTO 2",
        alt:"angular",
        url:"https://img.alicdn.com/imgextra/i1/6000000007540/TB24gJkuqSWBuNjSsrbXXa0mVXa_!!6000000007540-0-tbvideo.jpg",
        descricao:"mULHER"
    },
    {id: 3,
        titulo:"FOTO 3",
        alt:"angular",
        url:"https://img.alicdn.com/imgextra/i1/6000000007540/TB24gJkuqSWBuNjSsrbXXa0mVXa_!!6000000007540-0-tbvideo.jpg",
        descricao:"MULHER"
    }
]

}

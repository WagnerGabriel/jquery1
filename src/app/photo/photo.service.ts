import{ Injectable} from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Photo } from './photo.model';


const httpOptions = {
    headers: new HttpHeaders(
        {'Content-Type' : 'application/JsonPipe;charset-utf8'}
    )
}
@Injectable({providedIn: 'root'})
export class PhotoService{
    
//
    constructor(private http: HttpClient){}
    //GET request
    listPhotos() {
        return this.http.get<Photo[]>(`http://localhost:3000/photos`, httpOptions);
    }
}
import { NgModule } from "@angular/core";
import{ Routes, RouterModule } from "@angular/router";
import { PhotoRegistroComponent } from '../photo-registro/photo-registro.component';

const router: Routes = [
    {path: 'form', component: PhotoRegistroComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(router)
    ],
    exports: [RouterModule]
})


export class AppRoutingModule{

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';


const routes: Routes = [
  { path: '', component: GalleryPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

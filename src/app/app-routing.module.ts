import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';

const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'nextPage', component: OutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

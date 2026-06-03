import { Routes } from '@angular/router';
import { HomeComponent } from './app'; 
import { AteneiListComponent } from './pages/atenei-list/atenei-list';
import { AteneoDetailComponent } from './pages/ateneo-detail/ateneo-detail';
import { AteneoFormComponent } from './pages/ateneo-form/ateneo-form';
import { DipartimentiListComponent } from './pages/dipartimenti-list/dipartimenti-list';
import { CorsiListComponent } from './pages/corsi-list/corsi-list';
import { StudentiListComponent } from './pages/studenti-list/studenti-list';


export const routes: Routes = [
 { path: '', component: HomeComponent },
  { path: 'atenei', component: AteneiListComponent },
  { path: 'atenei/nuovo', component: AteneoFormComponent },
  { path: 'atenei/:id', component: AteneoDetailComponent },
  { path: 'dipartimenti', component: DipartimentiListComponent },
  { path: 'corsi', component: CorsiListComponent },
  { path: 'studenti', component: StudentiListComponent },];

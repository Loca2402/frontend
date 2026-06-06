import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { AteneiListComponent } from './pages/atenei-list/atenei-list';
import { AteneoDetailComponent } from './pages/ateneo-detail/ateneo-detail';
import { DipartimentiListComponent } from './pages/dipartimenti-list/dipartimenti-list';
import { CorsiListComponent } from './pages/corsi-list/corsi-list';
import { StudentiListComponent } from './pages/studenti-list/studenti-list';
import { AteneoCreateComponent } from './pages/ateneo-create/ateneo-create';
import { DipartimentoCreateComponent } from './pages/dipartimento-create/dipartimento-create';
import { CorsoCreateComponent } from './pages/corso-create/corso-create';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atenei', component: AteneiListComponent },
  { path: 'atenei/nuovo', component: AteneoCreateComponent },
  { path: 'atenei/:ateneoId', component: AteneoDetailComponent },
  { path: 'dipartimenti', component: DipartimentiListComponent },
  { path: 'dipartimenti/nuovo', component: DipartimentoCreateComponent},
  { path: 'corsi', component: CorsiListComponent },
  { path: 'corsi/nuovo', component: CorsoCreateComponent},
  { path: 'studenti', component: StudentiListComponent },

];

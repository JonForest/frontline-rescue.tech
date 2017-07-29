import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/components/login/login.component';
import { OverviewComponent } from 'app/components/overview/overview.component';
import { CommunicationComponent } from 'app/components/communication/communication.component';
import { HazardsComponent } from 'app/components/hazards/hazards.component';
import { ChecklistComponent } from 'app/components/checklist/checklist.component';
import { TeamComponent } from 'app/components/team/team.component';
import { PageNotFoundComponent } from 'app/components/page-not-found/page-not-found.component';

const routes: any = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'hazards',
    component: HazardsComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  },
  {
    path: 'checklist',
    component: ChecklistComponent
  }
];


// e.b note: always add the catch-all 404 route last
routes.push({path: '**', component: PageNotFoundComponent});

export const appRoutesModule = RouterModule.forRoot(routes);

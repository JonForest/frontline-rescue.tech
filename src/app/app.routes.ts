import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/components/login/login.component';
import { OverviewComponent } from 'app/components/overview/overview.component';
import { CommunicationComponent } from 'app/components/communication/communication.component';
import { HazzardsComponent } from 'app/components/hazzards/hazzards.component';
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
    path: 'hazzards',
    component: HazzardsComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  }
];


// e.b note: always add the catch-all 404 route last
routes.push({path: '**', component: PageNotFoundComponent});

export const appRoutesModule = RouterModule.forRoot(routes);

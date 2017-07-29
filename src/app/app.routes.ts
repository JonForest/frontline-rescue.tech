import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/components/login/login.component';
import { MapComponent } from 'app/components/map/map.component';
import { PageNotFoundComponent } from 'app/components/page-not-found/page-not-found.component';

const routes: any = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
];


// e.b note: always add the catch-all 404 route last
routes.push({path: '**', component: PageNotFoundComponent});

export const appRoutesModule = RouterModule.forRoot(routes);

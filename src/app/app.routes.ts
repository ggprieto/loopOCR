import { RouterModule, Routes} from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {
     path: '',
     component: PagesComponent,
     children : [
        { path: 'progress', component: ProgressComponent },
        { path: 'dashboard', component: DashboardComponent },
     ]
},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
     // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot (appRoutes, { useHash: true });

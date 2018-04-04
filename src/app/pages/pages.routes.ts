import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children : [
            { path: 'progress', component: ProgressComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'grafica', component: GraficaComponent },
            { path: 'accountsettings', component: AccountsettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
         ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild ( pagesRoutes );

import { NgModule } from '@angular/core';
// Modulo Shared
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';



@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraficaComponent,
        ProgressComponent
    ],
    exports : [
        DashboardComponent,
        GraficaComponent,
        ProgressComponent
    ],
    imports : [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }

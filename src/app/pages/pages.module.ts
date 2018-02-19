import { NgModule } from '@angular/core';
// Modulo Shared
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

// Charts
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';



@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraficaComponent,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports : [
        DashboardComponent,
        GraficaComponent,
        ProgressComponent
    ],
    imports : [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }

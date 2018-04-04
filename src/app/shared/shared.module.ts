import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule ({
    imports: [
    RouterModule,
    CommonModule
    ],
    declarations: [
        BreadcrumbComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    exports : [
        BreadcrumbComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }

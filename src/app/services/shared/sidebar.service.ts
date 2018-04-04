import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
  titulo: 'Principal',
  icono: 'mdi mdi-gauge',
  submenu: [
    { titulo: 'Dashboard', url: '/dashboard' },
    { titulo: 'Progreso', url: '/progress' },
    { titulo: 'Grafica', url: '/grafica' }
  ]
    }
  ];

  constructor() { }

}

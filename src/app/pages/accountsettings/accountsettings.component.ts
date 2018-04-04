import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styles: []
})
export class AccountsettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
  }
  cambiarColor ( tema: string ) {
    this._ajustes.aplicarTema (tema);
  }
}

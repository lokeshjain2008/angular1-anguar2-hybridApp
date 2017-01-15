// 'use strict';
// angular.element(function(){
//   angular.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
// });
// // Define the `phonecatApp` module
// angular.module('phonecatApp', [
//   'ngAnimate',
//   'ngRoute',
//   'core',
//   'phoneDetail',
//   'phoneList'
// ]);

import { Phone } from './core/phone/phone.service';
import {NgModule} from '@angular/core';
import  {BrowserModule} from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  providers:[
    Phone
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}

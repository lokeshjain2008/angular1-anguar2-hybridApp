'use strict';

// Register `phoneList` component, along with its associated controller and template

class PhoneListController{
  static $inject = ['Phone'];
  phones:any[];
  orderProp: string;
  constructor(Phone:any){
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}


angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });

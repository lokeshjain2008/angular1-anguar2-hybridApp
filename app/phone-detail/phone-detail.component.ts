'use strict';

interface Phone{
  images : string[];
}
// Register `phoneDetail` component, along with its associated controller and template

class PhoneDetailController{
  static $inject = ['$routeParams', 'Phone'];
  phone :  Phone;
  mainImageUrl: string;
  constructor($routeParams:any, Phone: any){
    this.phone  = Phone.get({phoneId: $routeParams.phoneId},(phone:Phone)=>{
      this.setImage(phone.images[0]);
    }) 
  }

  setImage(image: string){
    this.mainImageUrl = image;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });

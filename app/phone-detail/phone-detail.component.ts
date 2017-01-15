// 'use strict';

// interface Phone{
//   images : string[];
// }
// // Register `phoneDetail` component, along with its associated controller and template

// class PhoneDetailController{
//   static $inject = ['$routeParams', 'Phone'];
//   phone :  Phone;
//   mainImageUrl: string;
//   constructor($routeParams:any, Phone: any){
//     this.phone  = Phone.get({phoneId: $routeParams.phoneId},(phone:Phone)=>{
//       this.setImage(phone.images[0]);
//     }) 
//   }

//   setImage(image: string){
//     this.mainImageUrl = image;
//   }
// }

// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'phone-detail/phone-detail.template.html',
//     controller: PhoneDetailController
//   });




declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';
class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;
  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });

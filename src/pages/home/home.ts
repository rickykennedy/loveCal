import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	name1 = '';
	name2 = '';
	get score(){
		let name1 = this.name1.trim();
		let name2 = this.name2.trim();
		
		let test= this.name1.split(' ');
		let test2= this.name2.split(' ');
		let testName1 = '';
		for(let i=0; i < test.length;i++){
			if(i == 0){
				if(test[i] != ''){
					testName1 +=test[i];
				}
			}else{
				if(test[i] != ''){
					testName1 += " " +test[i];
				}
			}
		}
		let testName2 = '';
		for(let i=0; i < test2.length;i++){
			if(i == 0){
				if(test2[i] != ''){
					testName2 +=test2[i];
				}
			}else{
				if(test2[i] != ''){
					testName2 += " " +test2[i];
				}
			}
		}
//		console.log(testName2);
		name1 = testName1;
		name2 = testName2;
		
//		name1 = name1.replace(/ /g,'');
//		name2 = name2.replace(/ /g,'');
		const letters = (name1 + name2).toLowerCase();
		let sum = 0;
		for(let i=0; i < letters.length; i++){
			sum += letters.charCodeAt(i);
		}
		sum = sum * letters.length;
		if(name1 > name2){
			sum -= name2.length;
		}else{
			sum -= name1.length;
		}

		return Math.round(sum) % 101;
	};
  constructor(public navCtrl: NavController) {
    
  }

}

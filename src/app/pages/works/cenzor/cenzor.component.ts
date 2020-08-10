import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  textValue = '';
  word = '';
  badWords:Array<string> = ['java','tottenham'];
  stringWords:string = '';
  textByCenzor:string;
  validArea = false;
  validInput = false;

  constructor() { }

  ngOnInit(): void {
    this.stringWords = this.badWords.join(' ');
  }

  resetArea(): void{
    this.textValue = '';
    this.stringWords = '';
    this.badWords = [];
  }
  
  addWords(): void{
    if (this.word !== '') {
      this.badWords.push(this.word);
      this.stringWords += ' ' + this.word;
      this.word = '';
      this.validInput = false;
    }
    else { this.validInput = true; }
  }

  cenzorWords():void{
    if (this.textValue !== ''){
      let count = '';
      this.validArea = false;
      for (let cenzorWord of this.badWords){
        for (let j=0; j < cenzorWord.length; j++){
          count += '*';
        }
        this.textValue = this.textValue.replace(new RegExp (cenzorWord, 'gi'), count);
        count = '';
      }
    }
    else { this.validArea = true; }    
  }
}

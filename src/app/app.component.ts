import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'string_reverse';

  word:string='string';
  reverseWord:string=this.word.split('').reverse().join('');
  UpperCaseReverseWord:string=this.word.toUpperCase().split('').reverse().join('');
}

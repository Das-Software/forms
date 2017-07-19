import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  form: Form = {
    title: 'Form N-400'
  };
  topForms: Form[] = [
    {"title": "Form N-400"},
    {"title": "Form N-485"},
    {"title": "Form I-130"},
    {"title": "Form I-765"},
    {"title": "Form I-864"}
  ];
}
export class Form {
  title: string;
}

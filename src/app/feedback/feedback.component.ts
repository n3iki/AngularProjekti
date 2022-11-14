import { Component, OnInit } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  questions: Question[] = [new Question("Kysymys 1"), new Question("Kysymys 2"), new Question("Kysymys 3")];

  onInputChange(e:any, question:Question) :void //ei käytössä, tehdään toistaiseksi luokan question sisällä
  {
    question.answer = e.value;
    console.log(e.value);
    console.log(question.question);
    console.log(question.answer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

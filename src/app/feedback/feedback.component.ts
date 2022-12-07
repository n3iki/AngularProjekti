import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public questions:any[] = [];
  public questionAnswer : any = "haloo";
  public vastaus:any = "";


  onInputChange(e:any, question:any) :void
  {
    console.log(question + " Vastaus: " +e.value);
  }

  constructor(private _questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this._questionService.getQuestions();
  }

}

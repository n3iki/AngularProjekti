import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions()
  {
    return[
      {"Kysymys": "Kysymys 1"},
      {"Kysymys": "Kysymys 2"},
      {"Kysymys": "Kysymys 3"},
      {"Kysymys": "Kysymys 4"}
    ];
    
  }

  constructor() { }
}

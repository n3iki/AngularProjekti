
export class Question {
    question: string;
    answer?: string;
    
    constructor(Question:string)
    {
      this.question = Question;
      this.answer = "Ei vielä arvosteltu"
    }

    setAnswer(event:any)//ei käytössä vielä, testaus onnistuuko arvon muuttaminen sliderille
    {
        this.answer = event.value;
    }

}

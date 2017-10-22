import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-app2',
  template: `
    <div>
      <h2>Article component</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class ArticleComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}

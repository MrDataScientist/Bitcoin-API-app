import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

// article
import {ArticleComponent} from './article.component';


@NgModule({

  imports: [ BrowserModule, ReactiveFormsModule ],

  declarations: [ AppComponent,
                  DynamicFormComponent,
                  DynamicFormQuestionComponent,
                //  ArticleComponent
                 ],

  bootstrap: [ AppComponent ]

})

export class AppModule {
  constructor() {
  }
}

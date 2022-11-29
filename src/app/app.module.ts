import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//tuodut
import  { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from './question.service';
import { FinnkinoComponent } from './finnkino/finnkino.component';


const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'helloworld', component: HelloworldComponent },
  { path: 'templateddrivenform', component: TemplatedrivenformComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'finnkino', component: FinnkinoComponent},
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    HelloworldComponent,
    TemplatedrivenformComponent,
    ToolbarComponent,
    HomepageComponent,
    ReactiveformComponent,
    FinnkinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    NgbModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule

  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

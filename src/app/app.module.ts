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
import { CinemaService } from './cinema.service';
import { FinnkinoComponent } from './finnkino/finnkino.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AppFilterPipe } from './pipes/app-filter.pipe';
import { AdminviewComponent } from './adminview/adminview.component';
import { LoginComponent } from './login/login.component';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { LogoutviewComponent } from './logoutview/logoutview.component';


const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'helloworld', component: HelloworldComponent },
  { path: 'templateddrivenform', component: TemplatedrivenformComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'finnkino', component: FinnkinoComponent},
  { path: 'admin/main', component: AdminviewComponent, canActivate: [AuthGuard]},
  { path: 'admin/login', component: LoginComponent},
  { path: 'logoutview', component: LogoutviewComponent},
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
    FinnkinoComponent,
    AppFilterPipe,
    AdminviewComponent,
    LoginComponent,
    LogoutviewComponent,
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
      {enableTracing: false}
    ),
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  

  ],
  providers: [QuestionService, CinemaService, ],
  bootstrap: [AppComponent]
})

export class AppModule { }

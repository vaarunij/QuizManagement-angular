import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserQuizComponent } from './user-quiz/user-quiz.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'createquestion', component: CreatequestionComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userquiz', component: UserQuizComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserQuizComponent,
    AdminloginComponent,
    CreatequestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

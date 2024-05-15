import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/data.service';
import { ItalicDirective } from './core/directive/italic.directive';
import { Form1Component } from './pages/form1/form1.component';
import { Form2Component } from './pages/form2/form2.component';
import { ReversePipe } from './core/pipes/reverse.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

const AppRoutes: Routes = [
  {path: '', component: Page1Component},
  {path: 'page2/:id', component: Page2Component, canDeactivate: [confirmOutGuard]},
  {path: 'page3', component: Page3Component, canActivate: [confirmInGuard]},
  {path: 'form1', component: Form1Component},
  {path: 'form2', component: Form2Component},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NotFoundComponent,
    ItalicDirective,
    Form1Component,
    Form2Component,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

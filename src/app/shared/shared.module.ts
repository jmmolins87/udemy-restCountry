import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ** My Components **
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    // ** My Components **
    FooterComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // ** My Components **
    FooterComponent,
    SidebarComponent,
    MenuComponent
  ]
})
export class SharedModule { }

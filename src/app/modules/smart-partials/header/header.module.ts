
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { TitleModule, ExpansionPanelModule, LogoModule, PhoneAnimationModule, InputModule, ButtonMainModule, HamburgerModule, DropdownModule } from '@app/modules/ui';

import { HeaderComponent } from './container/header.component';
import { MODALS } from './modals';


@NgModule({
  declarations: [
    ...MODALS,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExpansionPanelModule,
    TitleModule,
    LogoModule,
    PhoneAnimationModule,
    InputModule,
    ButtonMainModule,
    HamburgerModule,
    DropdownModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

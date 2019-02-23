import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule
  ],
  declarations: [MessageListComponent]
})
export class MessagesModule { }

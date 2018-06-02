import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from '@chat/chat.component';
import { DialogUserComponent } from '@chat/dialog-user/dialog-user.component';
import { SocketService } from '@chat/shared/services/socket.service';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [ChatComponent, DialogUserComponent],
  providers: [SocketService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule {}

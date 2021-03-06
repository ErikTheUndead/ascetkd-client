import { Injectable } from '@angular/core';
import { Event } from '@chat/shared/model/event';
import { Message } from '@chat/shared/model/message';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}

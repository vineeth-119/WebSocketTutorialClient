import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSocketClient';
  @Input() stock:any;
  private webSocket: WebSocket;

  constructor(){
    this.webSocket = new WebSocket('ws://localhost:8080/stocks');
    console.log('done');
    this.webSocket.onmessage=(event)=>{
        this.stock = JSON.parse(event.data);
        console.log(this.stock);
    };
  }

}
export interface Stock{
  name:String,
  amount:number,
  increased:boolean,
  icon:string
}

import {Component, OnInit} from '@angular/core';
import {Message} from '../../classes/message';
import {DialogFlowService} from '../../services/dialog-flow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: Message[] = [];

  public currentMessage: Message = new Message('', 'assets/images/user.png');

  constructor(private dialogFlowService: DialogFlowService) {
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.currentMessage.timestamp = new Date();
    this.messages.push(this.currentMessage);

    this.dialogFlowService.getResponse(this.currentMessage.content).subscribe((res: any) => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
    });

    this.currentMessage = new Message('', 'assets/images/user.png');
  }
}

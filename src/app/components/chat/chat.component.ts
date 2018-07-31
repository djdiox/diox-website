import {Component, OnInit} from '@angular/core';
import {Message} from '../../classes/message';
import {DialogFlowService} from '../../services/dialog-flow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

/**
 * A chat component for implementing dialog flow for user interaction
 */
export class ChatComponent implements OnInit {

  /**
   * A list of messages that are visible
   * @type {Array}
   */
  public messages: Message[] = [];

  /**
   * The message that will be send
   * @type {Message}
   */
  public currentMessage: Message = new Message('', 'assets/images/user.png');

  /**
   * Creates a instance of this component
   * @param dialogFlowService
   */
  constructor(private dialogFlowService: DialogFlowService) {
  }

  /**
   * Angular Init of the component
   */
  ngOnInit() {
  }

  /**
   * Sends a message via model binding & dialogFlow Service
   */
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

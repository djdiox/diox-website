/**
 * Created a new Message for talking to the chatbot
 */
export class Message {
  /**
   * Text that will be send
   */
  content: string;
  /**
   * Message Sent date
   */
  timestamp: Date;

  /**
   * The avatar picture
   */
  avatar: string;

  /**
   * Creates the message with given parameters
   * @param content Text that will be send
   * @param avatar The avatar picture
   * @param timestamp Message Sent date
   */
  constructor(content: string, avatar: string, timestamp?: Date) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}

export class TransportModel {
  public from: string;
  public to: string;
  public fromTime: Date;
  public toTime: Date;
  public delay: number;


  constructor(from: string, to: string, fromTime: Date, toTime: Date, delay: number) {
    this.from = from;
    this.to = to;
    this.fromTime = fromTime;
    this.toTime = toTime;
    this.delay = delay;
  }
}

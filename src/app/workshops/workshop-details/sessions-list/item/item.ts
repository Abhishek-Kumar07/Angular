import { Component, EventEmitter, Input, Output } from '@angular/core';
import ISession from '../../../models/ISession';
import { SessionsList } from '../sessions-list';
import { Sessions } from '../../../sessions';
import { VotingWidget } from "../../../../common/voting-widget/voting-widget";

@Component({
  selector: 'app-item',
  imports: [VotingWidget],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input()
  session!: ISession;

  @Output()
  vote = new EventEmitter<number>();

  emitVote(by : number){
    this.vote.emit(by);
  }
}

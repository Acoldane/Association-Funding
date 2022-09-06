import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Asso} from '../../models/asso.model';
import {Observable} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, AssoActionType, AssoState} from '../../state/asso.state';
import {EventService} from '../../services/event.service';
import {Evenement} from "../../models/evenement.model";


@Component({
  selector: 'app-read-event2',
  templateUrl: './read-event.component.html',
  styleUrls: ['./read-event.component.css']
})
export class ReadEventComponent2 implements OnInit {

  @Input() event$: Observable<AssoState<Evenement[]>> | null = null;

  readonly dataStateTypeEnum = DataStateTypeEnum;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  updateEvent(event: Evenement) {
    //this.newAssoETATEvent.emit({actionType: AssoActionType.SWITCH_ETAT, payload: Asso});
    this.eventService.publish({actionType: AssoActionType.SWITCH_ETAT_EVENT, payload: event});
  }

  deleteEvent(evebt: Evenement) {
    //this.deleteAssoEvent.emit({actionType: AssoActionType.DELETE_ASSO, payload: asso})
    this.eventService.publish({actionType: AssoActionType.DELETE_EVENT, payload: event});
  }

}

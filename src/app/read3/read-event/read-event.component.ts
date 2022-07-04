import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Asso} from '../../models/asso.model';
import {Observable} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, AssoActionType, AssoState} from '../../state/asso.state';
import {EventService} from '../../services/event.service';
import {Evenement} from "../../models/evenement.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-read-event',
  templateUrl: './read-event.component.html',
  styleUrls: ['./read-event.component.css']
})
export class ReadEventComponent implements OnInit {

  @Input() event$: Observable<AssoState<Evenement[]>> | null = null;

  readonly dataStateTypeEnum = DataStateTypeEnum;

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit(): void {
  }

  updateEvent(evenement: Evenement) {
    //this.newAssoETATEvent.emit({actionType: AssoActionType.SWITCH_ETAT, payload: Asso});
    this.eventService.publish({actionType: AssoActionType.SWITCH_ETAT_EVENT, payload: evenement});

    this.eventService.publish({actionType:AssoActionType.GET_ALL_EVENT})
    this.router.navigate(['/evenements']);
  }

  deleteEvent(evenement: Evenement) {
    //this.deleteAssoEvent.emit({actionType: AssoActionType.DELETE_ASSO, payload: asso})
    this.eventService.publish({actionType: AssoActionType.DELETE_EVENT, payload: evenement});
  }

}

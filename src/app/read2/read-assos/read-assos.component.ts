import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Asso} from '../../models/asso.model';
import {Observable} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, AssoActionType, AssoState} from '../../state/asso.state';
import {EventService} from '../../services/event.service';


@Component({
  selector: 'app-read-assos',
  templateUrl: './read-assos.component.html',
  styleUrls: ['./read-assos.component.css']
})
export class ReadAssosComponent implements OnInit {

  @Input() assos$: Observable<AssoState<Asso[]>> | null = null;

  readonly dataStateTypeEnum = DataStateTypeEnum;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  updateAsso(asso: Asso) {
    //this.newAssoETATEvent.emit({actionType: AssoActionType.SWITCH_ETAT, payload: Asso});
    this.eventService.publish({actionType: AssoActionType.SWITCH_ETAT, payload: Asso});
  }

  deleteAsso(asso: Asso) {
    //this.deleteAssoEvent.emit({actionType: AssoActionType.DELETE_ASSO, payload: asso})
    this.eventService.publish({actionType: AssoActionType.DELETE_ASSO, payload: asso});
  }

}

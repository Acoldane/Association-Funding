import {Component, OnInit} from '@angular/core';
import {AssoService} from '../services/asso.service';
import {Asso} from '../models/asso.model';
import {Observable, of} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, AssoActionType, AssoState} from '../state/asso.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../services/event.service';
import {Evenement} from "../models/evenement.model";
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-read3',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})

export class ReadComponent3 implements OnInit {

  events: Evenement[] | null = null;
  events$: Observable<AssoState<Evenement[]>> | null = null;

  constructor(private evenementService: EvenementService, private activatedRoute: ActivatedRoute, private eventService: EventService) {
  }


  ngOnInit(): void {
    this.eventService.eventObservable.subscribe((action: ActionEvent) => {
      this.onActionEvent(action);
    });
  }


  getAllAssosObs() {
    this.events$ = this.evenementService.getAll().pipe(
      map(event => ({data: event, state: DataStateTypeEnum.SUCCESS})),
      startWith({state: DataStateTypeEnum.LOADING}),
      catchError(err => of({state: DataStateTypeEnum.ERROR, error: err.message}))
    );
  }

  switchEtatOfAsso(event: Evenement) {
    this.evenementService.updateEtat(event)
      .subscribe(res => {
          res.etat = event.etat;
        },
        error => {
          console.log(error);
        });
  }

  deleteAsso(event: Evenement) {
    this.evenementService.delete(event)
      .subscribe(res => {
          this.getAllAssosObs();
        },
        error => {
          console.log(error);
        });
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.actionType) {
      case AssoActionType.GET_ALL_EVENT:
        this.getAllAssosObs();
        break;
      case AssoActionType.SWITCH_ETAT_EVENT:
        this.switchEtatOfAsso($event.payload);
        break;
      case AssoActionType.DELETE_EVENT:
        this.deleteAsso($event.payload);
        break;
    }
  }
}

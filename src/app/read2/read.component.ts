import {Component, OnInit} from '@angular/core';
import {AssoService} from '../services/asso.service';
import {Asso} from '../models/asso.model';
import {Observable, of} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, AssoActionType, AssoState} from '../state/asso.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})

export class ReadComponent2 implements OnInit {

  assos: Asso[] | null = null;
  assos$: Observable<AssoState<Asso[]>> | null = null;

  constructor(private assoService: AssoService, private activatedRoute: ActivatedRoute, private eventService: EventService) {
  }


  ngOnInit(): void {
    this.eventService.eventObservable.subscribe((action: ActionEvent) => {
      this.onActionEvent(action);
    });
  }


  getAllAssosObs() {
    this.assos$ = this.assoService.getAll().pipe(
      map(asso => ({data: asso, state: DataStateTypeEnum.SUCCESS})),
      startWith({state: DataStateTypeEnum.LOADING}),
      catchError(err => of({state: DataStateTypeEnum.ERROR, error: err.message}))
    );
  }

  switchEtatOfAsso(asso: Asso) {
    this.assoService.updateEtat(asso)
      .subscribe(res => {
          res.etat = asso.etat;
        },
        error => {
          console.log(error);
        });
  }

  deleteAsso(asso: Asso) {
    this.assoService.deleteAsso(asso)
      .subscribe(res => {
          this.getAllAssosObs();
        },
        error => {
          console.log(error);
        });
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.actionType) {
      case AssoActionType.GET_ALL_ASSOS:
        this.getAllAssosObs();
        break;
      case AssoActionType.SWITCH_ETAT:
        this.switchEtatOfAsso($event.payload);
        break;
      case AssoActionType.DELETE_ASSO:
        this.deleteAsso($event.payload);
        break;
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {AssoActionType} from '../../state/asso.state';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-read-bar3',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarComponent3 implements OnInit {


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAllAssos();
  }

  getAllAssos() {
    this.eventService.publish({actionType:AssoActionType.GET_ALL_EVENT})
  }

}

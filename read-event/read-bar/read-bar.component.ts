import {Component, OnInit} from '@angular/core';
import {AssoActionType} from '../../state/asso.state';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-read-bar-event-1',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarEventComponent1 implements OnInit {


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAllEvent();
  }

  getAllEvent() {
    this.eventService.publish({actionType:AssoActionType.GET_ALL_EVENT})
  }

}

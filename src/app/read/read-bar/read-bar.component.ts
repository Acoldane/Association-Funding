import {Component, OnInit} from '@angular/core';
import {ItemActionType} from '../../state/asso.state';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-read-bar',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarComponent implements OnInit {


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  getAllAssos() {
    this.eventService.publish({actionType:ItemActionType.GET_ALL_ASSOS})
  }

}

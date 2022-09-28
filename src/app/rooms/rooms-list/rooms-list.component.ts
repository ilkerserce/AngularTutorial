import { Component, OnInit, Input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

@Input() room: RoomList[] = [];
roomList: any;

  constructor() { }

  ngOnInit(): void {
  }

}

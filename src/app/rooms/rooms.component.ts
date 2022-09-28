import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  numberofRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe Room",
        amenities: "Air Condition, Free Wifi, TV, Bathroom, Kitchen",
        price: 500,
        photos: 'https://image.unsplash.com/photo-1518791841217-8f162fle1131',
        checkinTime: new Date('11-Nov-2021'),
        checkoutDate: new Date('12-Nov-2021'),
        rating: "3.4",
      },
      {
        roomNumber: 2,
        roomType: "Deluxe Room",
        amenities: "Air Condition, Free Wifi, TV, Bathroom, Kitchen",
        price: 1000,
        photos: 'https://image.unsplash.com/photo-1518791841217-8f162fle1131',
        checkinTime: new Date('11-Nov-2021'),
        checkoutDate: new Date('12-Nov-2021'),
        rating: "3.923232",
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        amenities: "Air Condition, Free Wifi, TV, Bathroom, Kitchen",
        price: 15000,
        photos: 'https://image.unsplash.com/photo-1518791841217-8f162fle1131',
        checkinTime: new Date('11-Nov-2021'),
        checkoutDate: new Date('12-Nov-2021'),
        rating: "4.5",
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}

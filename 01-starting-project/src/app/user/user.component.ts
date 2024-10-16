import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Singnals
  // user = DUMMY_USERS[0]
  // user = signal(DUMMY_USERS[0])
  // imagePath = computed(() => "assets/users/" + this.user().avatar)
  // get imageGetter() {
  //   return this.imagePath()
  // }

  // onSelectUser() {
  //   console.log("Clicked")
  //   var n = Math.floor(DUMMY_USERS.length * Math.random())
  //   this.user = DUMMY_USERS[n]
  // }

  // onSelectUser() {
  //   console.log("Clicked")
  //   var n = Math.floor(DUMMY_USERS.length * Math.random())
  //   this.user.set(DUMMY_USERS[n])
  // }

  //end signals

  //disaply all users
  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() id!: string;
  // get imagePath() {
  //   return "assets/users/" + this.avatar
  // }

  // onSelectUser() {

  // }

  @Input() name!: string
  @Input() avatar!: string
  @Input() id!: string

  @Output() select = new EventEmitter() 
  // select = output<string>()
  // avatar = input.required<string>()
  // name = input.required<string>()
  // id = input.required<string>()
  get imagePath() {
    return "assets/users/" + this.avatar
  }

  onSelect() {
    this.select.emit(this.name)       
  }
}

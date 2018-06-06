import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Auth} from '../model/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {

  @Input()
  model: Auth;

  @Output()
  modelChange: EventEmitter<Auth> = new EventEmitter<Auth>();

  constructor() {
  }

  ngOnInit() {
    this.model = new Auth();
  }

  ngAfterViewInit(): void {
    this.model = new Auth();
  }

  action() {
    this.modelChange.emit(this.model);
  }

}

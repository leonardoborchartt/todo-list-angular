import { Component, OnInit } from '@angular/core';
import {Task} from '../../interfaces/task'
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-list-done',
  templateUrl: './list-done.component.html',
  styleUrls: ['./list-done.component.scss']
})
export class ListDoneComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }
  
  public getTasksDone(): Task[]{
    return this.storeService.getTasksDone();
  }

}

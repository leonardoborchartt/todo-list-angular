import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../interfaces/task'
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() task: Task;
  @Input() isDone?: boolean = false;

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
  }
  public removeTask():void{
    this.storeService.removeTasks(this.task);
  } 
  public doneTask():void{
    this.storeService.doneTask(this.task);
  } 

}

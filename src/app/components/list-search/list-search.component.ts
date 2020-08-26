import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service'
import {Task} from '../../interfaces/task'

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {

  textInput=null;
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
  }
  public createTask(): void {
   this.storeService.addTask(this.textInput);
   this.textInput='';

   this.storeService.getPokemon().subscribe((data)=> {console.log(data)});
  }
  public getTasks(): Task[]{
    return this.storeService.getTasks();
  }

}

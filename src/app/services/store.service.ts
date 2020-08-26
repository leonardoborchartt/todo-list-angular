import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private tasks: Task[] = [];
  constructor(private http:HttpClient) { }
  
  public addTask(description:string): void{
    this.tasks.push({
      description: description,
      id: this.guidGenerator(),
      isDone:false
    });
  }
  public getTasks(): Task[]{
    return this.tasks.filter(task => !task.isDone);
  }
  public getTasksDone(): Task[]{
    return this.tasks.filter(task => task.isDone);
  }
  public removeTasks(taskToRemove): void{
    this.tasks = this.tasks.filter((task) => {
      return task.id !== taskToRemove.id;
    })
  }

  public doneTask(taskToDone):void {
    this.tasks.map((task)=>{
      if(task.id === taskToDone.id){
        task.isDone = true;
      }
    })
  }
  
  public getPokemon(): any{
    const api = 'https://pokeapi.co/api/v2/pokemon/ditto';
    return this.http.get(api);
  }

  
  private guidGenerator(): string {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';


@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.menuItems.push({
      description: 'Cadastrar tarefa',
      route:'/home'
    });
    this.menuItems.push({
      description: 'Lista de tarefas',
      route:'/done'
    })
  }
}

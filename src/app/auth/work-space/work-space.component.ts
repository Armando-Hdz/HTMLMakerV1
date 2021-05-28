import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css']
})
export class WorkSpaceComponent implements OnInit {

  todo: string[] = [
  ]

  pageTitle: string [] = [
  ]

  pageLeft: string [] = [
  ]

  pageRight: string [] = [
  ]

  pageCenter: string [] = [
  ]

  pageEnd: string [] = [
  ]

  tarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  agregarTarea(){
    if(this.tarea == ''){
      return;
    }
    this.todo.push(this.tarea);
    this.tarea = '';
  }

}

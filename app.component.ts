import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container text-center">
      <h1>My Checklist</h1>
      <br>
      <hr>
      <br>
      <div class="container text-center input-group mb-3">
        <input [value]="todo" (input)="todo = $event.target.value" class="form-control" type="text" placeholder="Enter to-do tasks">
        <button (click)="clickHandler()" class="btn btn-primary">Add</button>
      </div>
      <div class="input-group mb-3" *ngFor="let item of items">
        <input id={{item}} class="form-check-input" [(ngModel)]="checktodo" (change)="checkboxHandler($event)" type="checkbox">
        <label>{{item | titlecase}}</label> 
      </div>
  `,
  styles: [`
    .container.text-center.input-group{
      width : 300px;
    }
  `]
})
export class AppComponent {
  title = 'checklist-assignment';
  items = [];
  todo = '';
  selected = false;
  clickHandler(){
    this.items.push(this.todo);
    this.todo = '';
  }
  checkboxHandler(e){
    this.selected = e.target.checked;
    let td = document.getElementById(e.target.id).nextElementSibling;
    if(this.selected){
      td.innerHTML = '<del>'+td.innerHTML+'</del>';
    }
    else {
      td.innerHTML = td.textContent;
    }
  }
}

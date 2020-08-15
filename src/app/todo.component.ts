import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
        <br> <br>
        <form (ngSubmit)="process()">
            TODO : <input name="todo" type="text" [(ngModel)]=todo>
            <button type="submit">Add to list</button>
        </form>
        <div *ngFor="let t of todolist">
            <p>{{ t }}</p>
        </div>
    `
})
export class TodoComponent{
    todolist: String[] = [];
    todo: string;
    process() {
        this.todolist.push(this.todo);
    }
}
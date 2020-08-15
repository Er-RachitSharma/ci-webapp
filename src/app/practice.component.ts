import { Component } from '@angular/core';

@Component({
    selector: 'practice',
    template: `
    <div class="mainDiv">
        <h2>Welcome to TODO list generator!</h2> <br>
        <form (ngSubmit)="process()">
            Enter your name : <input size=35 type="text" name="name1" [(ngModel)]=name > <br><br>
            Enter the tasks you want to add to your TODO list : <input size=35 type="text" name="task1" [(ngModel)]=task> <br><br>
            <button type="submit">Add</button> <br><br>
        </form>
        <h4 *ngIf="name">Hi {{ name }}! The tasks you need to do are following:</h4>
        <div *ngFor="let t of todolist">
            <ul>
                <li>{{ t }}</li>
            </ul>
        </div>
    </div>
    `,
    styles: [' button{margin-left:45%; border-radius:15px;} input{float:right; border-radius:15px} h2{text-align: center;} h4{color:red;} .mainDiv{background-color:lightgray; border: 1px solid black; width:600px; border-radius:5px; padding:20px; margin:auto;}']
})
export class PracticeComponent {
    todolist: String[] = [];
    name: String;
    task: String;

    process() {
        this.todolist.push(this.task);
    }
}
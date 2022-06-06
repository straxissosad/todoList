import { Component, OnInit } from '@angular/core';
import {GrudService} from "../../service/grud.service";
import {Task} from "../../model/task";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr : Task[] = [];

  addTaskValue: string = '';

  constructor(private crudService: GrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res =>{this.ngOnInit()}, error => alert(error))
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res
      this.addTaskValue = ''
    }, error => alert(error))
  }

  editTask(){
    this.crudService.editTask(this.taskObj).subscribe(res=>{this.ngOnInit()}, error => alert(error))
  }

  deleteTask(etask: Task){
    this.crudService.deleteTask(etask).subscribe(res=>{this.ngOnInit()}, error => alert(error))
  }
}

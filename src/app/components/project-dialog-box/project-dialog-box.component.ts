import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-dialog-box',
  templateUrl: './project-dialog-box.component.html',
  styleUrl: './project-dialog-box.component.scss'
})
export class ProjectDialogBoxComponent implements OnInit{
  id!:string|null;
  
  ngOnInit(): void {
    this.id = localStorage.getItem("id");
  }
  
  ngOnChanges(change: SimpleChanges) {
    if (change['id']) {
      this.id = change['id'].currentValue;
      console.log(this.id);
      
    }
  }
}

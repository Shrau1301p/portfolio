import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skills } from './interfaces/skills';
import { project } from './interfaces/project';
import { ProjectDialogBoxComponent } from './components/project-dialog-box/project-dialog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  showFiller = false;
  readonly dialog = inject(MatDialog);
  selectedGroup = '';
  progSkillSets: Skills[] = [];
  webSkillSets: Skills[] = [];
  frameSkillSets: Skills[] = [];
  dbSkillSets: Skills[] = [];

  project1: project[] = [];
  
  ngOnInit(): void {
    this.selectedGroup = '';
    this.progSkillSets = [
      {
        mode: 'determinate',
        value: 70,
        title: 'JAVA'
      },
      {
        mode: 'determinate',
        value: 50,
        title: 'C'
      },
      {
        mode: 'determinate',
        value: 80,
        title: 'PHP'
      },
      {
        mode: 'determinate',
        value: 30,
        title: 'Python'
      },
      {
        mode: 'determinate',
        value: 50,
        title: 'CPP'
      },
    ];

    this.webSkillSets = [
      {
        mode: 'determinate',
        value: 90,
        title: 'Angular'
      },
      {
        mode: 'determinate',
        value: 30,
        title: 'react'
      },
      {
        mode: 'determinate',
        value: 50,
        title: 'CSS'
      },
      {
        mode: 'determinate',
        value: 90,
        title: 'Javascript'
      },
      {
        mode: 'determinate',
        value: 80,
        title: 'NodeJS'
      },
    ];


    this.frameSkillSets = [
      {
        mode: 'determinate',
        value: 80,
        title: 'CodeIgniter'
      },
      {
        mode: 'determinate',
        value: 60,
        title: 'Flask'
      },
      {
        mode: 'determinate',
        value: 90,
        title: 'Ionic'
      },
    ];

    this.dbSkillSets = [
      {
        mode: 'determinate',
        value: 90,
        title: 'MySQL'
      },
      {
        mode: 'determinate',
        value: 70,
        title: 'MongoDB'
      },
    ]


    this.project1 = [
      {
        id:"1",
        title: "College Community System (MERN)",
        duration: "07/2023 - 12/2023",
        image: {
          src: "/assets/ccsimg.jpeg",
          alt: "d",
        },
        description:
          "This project is designed to serve educational institutions by streamlining their operations and facilitating communication among students, teachers, and alumni.",
        
      },
      {
        id:"2",
        title: "Triple DES Cryptography (Flask)",
        duration: "11/2022 - 02/2023",
        image: {
          src: "/assets/edsimg.jpg",
          alt: "d",
        },
        description:
          "This project focuses on enhancing data security through the use of Triple DES (Data Encryption Standard) encryption, providing a secure platform for file sharing.",
        
      },
      {
        id:"3",
        title: "FurBaby Community System",
        duration: "07/2024 - Present",
        image: {
          src: "/assets/proj3.png",
          alt: "d",
        },
        description:
          "Fur Baby is a vibrant online community where pet enthusiasts can create profiles for their beloved animals and share their stories, much like Instagram. Our platform allows pet owners to post feeds, share moments, and engage with others through likes and comments, fostering a lively and supportive environment.",
        
      }
    ];


  }

  openDialog(id:string): void {
    localStorage.setItem("id",id);
    const dialogRef = this.dialog.open(ProjectDialogBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

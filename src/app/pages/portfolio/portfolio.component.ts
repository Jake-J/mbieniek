import { Component, OnInit, HostListener } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('projects', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  @HostListener('window:scroll', [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          if (this.allProjects.length) {
            this.projectsToDisplay.push(this.allProjects.shift());
          }
      }
  }

  projectsToDisplay = [{id: 1, imagePath: '../../../assets/images/pi1.jpg'}];
  allProjects = [
    {id: 2, imagePath: 'assets/images/pi2.jpg'},
    {id: 3, imagePath: 'assets/images/pi3.jpg'},
    {id: 4, imagePath: 'assets/images/pi4.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

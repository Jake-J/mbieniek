import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          if (this.allProjects.length) {
            this.projectsToDisplay.push(this.allProjects.shift());
          }
          console.log(this.allProjects);
      }
  }

  projectsToDisplay = [{id: 1, imagePath: '../../../assets/images/pi1.jpg'}];
  allProjects = [
    {id: 2, imagePath: '../../../assets/images/pi2.jpg'},
    {id: 3, imagePath: '../../../assets/images/pi3.jpg'},
    {id: 4, imagePath: '../../../assets/images/pi4.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

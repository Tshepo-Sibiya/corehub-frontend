import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface ModuleCard {
  title: string;
  description: string;
  icon: string;
  route: string;
  visible: boolean;
}


@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }



  modules: ModuleCard[] = [
    {
      title: 'Module1',
      description: 'Description of Module1',
      icon: 'bi-grid',
      route: '/module1',
      visible: true
    },
    {
      title: 'Module2',
      description: 'Description of Module2',
      icon: 'bi-file-earmark',
      route: '/module2',
      visible: true
    },
    {
      title: 'Module3',
      description: 'Description of Module3',
      icon: 'bi-bar-chart',
      route: '/module3',
      visible: false // Example: hidden for this user
    },
    {
      title: 'Module4',
      description: 'Description of Module4',
      icon: 'bi-shield',
      route: '/module4',
      visible: true
    }
  ];

}

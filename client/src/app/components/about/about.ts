import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  skills = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
  ];

  certificates = [
    {
      title: 'Angular',
      issuer: 'Infosys Springboard',
      url: 'angular.pdf'
    },
    {
      title: 'HTML5',
      issuer: 'Infosys Springboard',
      url: 'html.pdf'
    },
    {
      title: 'CSS3',
      issuer: 'Infosys Springboard',
      url: 'css.pdf'
    },
    {
      title: 'JavaScript',
      issuer: 'Infosys Springboard',
      url: 'js.pdf'
    }
  ];
}

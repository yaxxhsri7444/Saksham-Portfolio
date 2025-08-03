import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // src/app/data/projectsData.ts
PROJECTS = [
  {
    title: 'Spotify Clone',
    description: 'Music streaming web app built with Angular and TailwindCSS.',
    githubUrl: 'https://github.com/yaxxhsri7444/spotify-clone'
  },
  {
    title: 'E-Commerce Website',
    description: 'Fully responsive shopping site using MEAN stack.',
    githubUrl: 'https://github.com/yaxxhsri7444/ecommerce-site'
  },
  {
    title: 'E-Learning Platform',
    description: 'Online course website with video lessons and assignment submission.',
    githubUrl: 'https://github.com/yaxxhsri7444/e-learning-platform'
  },
  {
    title: 'Decentralized Job Finder',
    description: 'Connect job seekers and employers using blockchain features.',
    githubUrl: 'https://github.com/yaxxhsri7444/job-finder'
  },
];

}

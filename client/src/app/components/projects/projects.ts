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
    description: 'Music streaming web app built with Angular and Bootstrap.',
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
    description: 'A full-stack Decentralized Job Finder platform where Employers can post jobs, and jobseekers can apply and directly message employers — all within a modern responsive UI..',
    githubUrl: 'https://github.com/yaxxhsri7444/job-finder'
  },
  {
    title: 'Ask-AI – Personal AI Assistant ',
    description: 'Ask-AI is a lightweight and responsive web application that acts as your personal AI assistant.',
    githubUrl: 'https://github.com/yaxxhsri7444/Ask-AI'
  },
  {
    title: 'Port4U-Portfolio-PDF-Generator',
    description: 'A MEAN stack web app that lets users create and download professional PDF portfolios from their personal, academic, and work details',
    githubUrl: 'https://github.com/yaxxhsri7444/Port4U-Portfolio-PDF-Generator'
  },
];

}

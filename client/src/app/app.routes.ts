import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';

export const routes: Routes = [
    {path: '', redirectTo: '/hero', pathMatch: 'full'},
    {path: 'hero', component: Hero},
    {path: 'about',component: About},
    {path: 'project',component: Projects},
    {path: 'contact', component:Contact}
];

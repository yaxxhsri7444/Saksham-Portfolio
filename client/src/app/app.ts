import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Experince } from "./components/experince/experince";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, About, Projects, Contact, Experince],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'client';
}

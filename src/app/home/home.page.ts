import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { AddService } from '../services/add.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  libros: any

  constructor(private librosServise: LibrosService, private addService: AddService) { }

  addLibro() {
    this.addService.addBooks(this.libros)
  }

  ngOnInit() {
    this.librosServise.getBooks().subscribe(data => {
      this.libros = data.results.map((libro: any) => {
        const img = `https://robohash.org/${libro.title}`
        return { title: libro.title, img }
      })
    })
  }
}

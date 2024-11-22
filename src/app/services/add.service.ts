import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, writeBatch } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';

export interface Libro {
  title: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private firestore: Firestore) { }

  async addBooks(libros: Libro[]) {
    const booksRef = collection(this.firestore, 'books');
    const batch = writeBatch(this.firestore);

    libros.forEach(libro => {
      const docRef = doc(booksRef);
      batch.set(docRef, libro);
    });

    await batch.commit();
  }
}


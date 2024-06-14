import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBackground } from './background/background';

@Injectable({
  providedIn: 'root',
})
export class BackgroundsService {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly backgroundsCollection: CollectionReference = collection(this.firestore, 'backgrounds');

  public backgrounds$: Observable<IBackground[]> = collectionData(this.backgroundsCollection) as Observable<
    IBackground[]
  >;

  /* public writeBackgrounds() {
    const backgrounds = parseBackgrounds();
    return Promise.all(backgrounds.map(bg => addDoc(this.backgroundsCollection, bg)));
  } */
}

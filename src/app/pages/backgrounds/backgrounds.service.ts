import { inject, Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBackground } from '../../shared/backgrounds/background';

@Injectable({
  providedIn: 'root',
})
export class BackgroundsService {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly backgroundsCollection: CollectionReference = collection(this.firestore, 'backgrounds');

  public backgrounds$: Observable<IBackground[]> = collectionData(this.backgroundsCollection) as Observable<
    IBackground[]
  >;
}

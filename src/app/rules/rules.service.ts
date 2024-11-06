import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { IRuleArticle } from './rules';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  constructor() {}
  private readonly firestore: Firestore = inject(Firestore);
  private readonly rulesCollection: CollectionReference = collection(this.firestore, 'rules');

  public rules$: Observable<IRuleArticle[]> = collectionData(this.rulesCollection).pipe(
    map(rules => rules.sort((a, b) => Number(a['paragraph']) - Number(b['paragraph'])))
  ) as Observable<IRuleArticle[]>;

  /* public save(ruleArticle: IRuleArticle) {
    return setDoc(doc(this.rulesCollection, ruleArticle.paragraph), ruleArticle);
  } */
}

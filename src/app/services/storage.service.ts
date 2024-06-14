import { Injectable } from '@angular/core';import { getDownloadURL, getStorage, ref } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly storage = getStorage();

  constructor() {}

  public getImage(url: string) {
    return getDownloadURL(ref(this.storage, url));
  }
}

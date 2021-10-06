import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://picsum.photos/v2/list';
const PAGE_SIZE = 100;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getImageList(page = 1) {
    return this.http.get(URL, {
      params: {
        page: page.toString(),
        limit: PAGE_SIZE.toString()
      }
    });
  }
}

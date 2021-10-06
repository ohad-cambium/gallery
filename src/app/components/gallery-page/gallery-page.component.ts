import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  images = [];
  selectedImage;
  loading = true;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getImagesList();
  }

  getImagesList() {
    this.galleryService.getImageList(1).subscribe((response: any) => {
      this.images = response;

      if (this.images.length) {
        this.setSelectedImage(this.images[0]);
      }
    });
  }

  setSelectedImage(image) {
    if (this.selectedImage == image) {
      return;
    }

    this.loading = true;
    this.selectedImage = image;
  }

  onMainImageLoaded() {
    this.loading = false;
  }

  onMouseEnterImage(image) {
    console.log(image);
  }
}

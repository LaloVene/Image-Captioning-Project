import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  photo: SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false, 
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

  this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))

  }

}

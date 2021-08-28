import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photo: SafeResourceUrl;
  speech = new Speech();
  languages = [
    {
      name: 'English',
      lang: 'en-GB',
      voice: 'Google UK English Male',
    },
    {
      name: 'Español',
      lang: 'es-US',
      voice: 'Google español de Estados Unidos',
    },
    {
      name: 'Français',
      lang: 'fr-FR',
      voice: 'Google français',
    },
    {
      name: 'Deutsch',
      lang: 'de-DE',
      voice: 'Google Deutsch',
    },
    {
      name: 'Italiano',
      lang: 'it-IT',
      voice: 'Google italiano',
    },
  ];
  currentLanguage = this.languages[0];
  speechOptions = {
    volume: 1,
    lang: this.currentLanguage.lang,
    rate: 1,
    pitch: 1,
    voice: this.currentLanguage.voice,
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log('Event voiceschanged', voices);
      },
    },
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.initSpeak();
  }
  async takePicture() {
    this.speak();
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

  onLanguageChange() {
    console.log(1);
    this.speechOptions.lang = this.currentLanguage.lang;
    this.speechOptions.voice = this.currentLanguage.voice;
    this.initSpeak();
  }

  async initSpeak() {
    const data = await this.speech.init(this.speechOptions);
    console.log('Speech is ready, voices are available', data);
  }

  speak() {
    this.speech
      .speak({
        text: 'Hello World',
        queue: false, // current speech will be interrupted,
        listeners: {
          onstart: () => {
            // executed when the speaking starts
            console.log('Start utterance');
          },
          onend: () => {
            // executed when the speaking ends
            console.log('End utterance');
          },
        },
      })
      .then(() => {
        // Do something after speaking
      })
      .catch((e: any) => {
        console.error('An error occurred :', e);
      });
  }
}

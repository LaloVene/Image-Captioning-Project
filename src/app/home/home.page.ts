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
      translateLang: 'en',
      voice: 'Google UK English Male',
    },
    {
      name: 'Español',
      lang: 'es-US',
      translateLang: 'es',
      voice: 'Google español de Estados Unidos',
    },
    {
      name: 'Français',
      lang: 'fr-FR',
      translateLang: 'fr',
      voice: 'Google français',
    },
    {
      name: 'Deutsch',
      lang: 'de-DE',
      translateLang: 'de',
      voice: 'Google Deutsch',
    },
    {
      name: 'Italiano',
      lang: 'it-IT',
      translateLang: 'it',
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
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.initSpeak();
  }
  async takePicture() {
    this.translateText('Hello world');
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
  }

  async translateText(text: string) {
    if (this.currentLanguage.translateLang === 'en') {
      this.speak(text);
      return;
    }
    const res: any = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: this.currentLanguage.translateLang,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    this.speak(data.translatedText);
  }

  onLanguageChange() {
    this.speechOptions.lang = this.currentLanguage.lang;
    this.speechOptions.voice = this.currentLanguage.voice;
    this.initSpeak();
  }

  async initSpeak() {
    const data = await this.speech.init(this.speechOptions);
    // console.log('Speech is ready, voices are available', data);
  }

  async speak(text: string) {
    await this.speech.speak({ text, queue: false });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
      lang: 'en-US',
      translateLang: 'en',
      voice: 'Google US English',
    },
    {
      name: 'English UK',
      lang: 'en-GB',
      translateLang: 'en',
      voice: 'Google UK English Female',
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
    {
      name: 'Português',
      lang: 'pt-BR',
      translateLang: 'pt',
      voice: 'Google português do Brasil',
    },
    {
      name: 'Русский',
      lang: 'ru-RU',
      translateLang: 'ru',
      voice: 'Google हिन्दी',
    },
    {
      name: 'हिन्दी',
      lang: 'hi-IN',
      translateLang: 'hi',
      voice: 'Google हिन्दी',
    },
    {
      name: '日本語',
      lang: 'ja-JP',
      translateLang: 'ja',
      voice: 'Google 日本語',
    },
    {
      name: '普通话',
      lang: 'zh-CN',
      translateLang: 'zh',
      voice: 'Google 普通话（中国大陆）',
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

  constructor(private sanitizer: DomSanitizer, private loadingController: LoadingController) {}

  ngOnInit() {
    this.initSpeak();
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    this.presentLoading();

    const res: any = await fetch('https://seeyourworld.duckdns.org/image', {
      method: 'POST',
      body: JSON.stringify({
        format: image.format,
        image: image.base64String,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    this.translateText(data.result);
  }

  async translateText(text: string) {
    if (this.currentLanguage.translateLang === 'en') {
      this.loadingController.dismiss();
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
    this.loadingController.dismiss();
    this.speak(data.translatedText);
  }

  onLanguageChange() {
    this.speechOptions.lang = this.currentLanguage.lang;
    this.speechOptions.voice = this.currentLanguage.voice;
    this.initSpeak();
  }

  async initSpeak() {
    const data = await this.speech.init(this.speechOptions);
    console.log('Speech is ready, voices are available', data);
  }

  async speak(text: string) {
    await this.speech.speak({ text, queue: false });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();

    console.log('Loading dismissed!');
  }
}

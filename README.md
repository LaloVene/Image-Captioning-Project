# Image-Captioning-Project

By Eduardo Venegas, Moises Chávez, Leonardo Galindo, and Alberto Cortés.

## 📖 Project Overview
Technology is a great way to help those in need, as it continous to develop it also presents new possibilities, one such being human vision aided and complemented by computer vision. 

This project consists of a web and mobile based app that generates captions from images captured by the device's camera. The goal of the app is to help people with limited vision to see the world around them by using an easy to use UI from where the users can take a picture, upload it to the app a be presented with an audio caption in multiple languages of what they are seeing.

This can be run in a Web Browser or compiled to an Adroid or IOS device using the Ionic Capacitor tool.

[![License](https://img.shields.io/github/license/LaloVene/Image-Captioning-Project)](https://github.com/LaloVene/Image-Captioning-Project/blob/main/LICENSE)
[![Monitoring](https://img.shields.io/website?url=https%3A%2F%2Fsee-your-world.web.app)](https://see-your-world.web.app)

## 📍 Table of Contents
- [Technologies Used](https://github.com/LaloVene/MLH-PE-Project#-technologies-used)
- [Architecture](https://github.com/LaloVene/MLH-PE-Project#-architecture)
- [Site Overview](https://github.com/LaloVene/MLH-PE-Project#-site-overview)
- [Installation](https://github.com/LaloVene/MLH-PE-Project#%EF%B8%8F-installation)
- [Usage](https://github.com/LaloVene/MLH-PE-Project#-usage)
- [Contributing](https://github.com/LaloVene/MLH-PE-Project#-contributing)


## 💻 Technologies Used
- Docker
- Google CLoud
- Ionic Angular
- TensorFlow
- Github Actions
- Flask
- Python
- Typescript

## 📚 Architecture

The architecture of the app is composed by a client app that captures images and a server app that process the images using a Deep Learning model and returns the generated captions.
- The client app is an Ionic Angular app takes a picture and encodes the captured image to a base64 string that is sent through a POST request to the server.
- The server app is a Flask container running in Docker that holds a trained Captioning Neural Network composed of a Convolutional Neural Network to extract features of an image and a Recurrent Neural Network that generated captions from the features of the image using a Long Short Term Memory model.
- Once an image is passed as input to the Captioning Neural Network it returns a text caption that is returned to the client app.
- Finally, the client app presents the text caption as an audio output that is being translated to any of the 11 available languages using text-to-speech, once the audio is finished the app returns to the main activity.
- The client app can be used in a Web Browser or compiled to an Android or IOS device by using Ionic.
- Response time under 1.5 seconds

![image](https://user-images.githubusercontent.com/54692916/131257895-673830e5-4e89-43a2-87f4-bb6a80956ca8.png)


## 🔍 Site Overview
### Home Page
Users can select the language of the audio output and press the button that launches a camera intent.

![image](https://user-images.githubusercontent.com/54692916/131256594-73b379a5-84ef-4229-94e6-21510fceaeb6.png)
![image](https://user-images.githubusercontent.com/54692916/131256732-57df4d0c-cbe3-4670-9aa5-0dd0db225981.png)


### Supported Languages
Currently 11 languages are being supported, handling translations and pronunciation.

![image](https://user-images.githubusercontent.com/54692916/131256623-abb2ad49-d66a-4db4-8e23-ddc8260bd8a2.png)


### Camera Page
The user can capture an image and confirm or reject the captured image.

![image](https://user-images.githubusercontent.com/54692916/131256608-ccb96b21-5640-4109-befc-893730127e67.png)

## 🤖 CI/CD
This project has a full Continuous Integration and Delivery system.
- All code is tested the moment a pull request is created by building it in Github Actions
- You can merge into main when all tests pass.
- When Continuous Delivery is triggered, Github Actions builds the API image and pushes it into a Github Package Registry.
- SSHs into a Google Cloud instance, pull the new images, stop the current docker compose and run it again.
- Also Github Actions connects with Firebase to deliver automatic client deployments.
- As an extra, an Android an IOS app can be compiled from the main source code.
![CI/CD](https://user-images.githubusercontent.com/54692916/131256971-2cd48bcd-9dbf-4cb9-8059-53c73fffb467.png)


## ⬇️ Installation

Make sure you have python3 and pip installed

Create and activate virtual environment using virtualenv

```bash
$ python -m venv python3-virtualenv
$ source python3-virtualenv/bin/activate
```

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all dependencies

```bash
pip install -r requirements.txt
```

Install the node modules

```bash
npm i
```

 ## 💼 Usage
 Make sure to have ionic installed
 ```bash
$ flask run
$ ionic serve
```
 
## 📝 Contributing
Contributions are welcome! Please refer to the guidelines.

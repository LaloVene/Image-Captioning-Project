# Image-Captioning-Project

By Eduardo Venegas, Moises Chávez, Leonardo Galindo, and Alberto Cortés.

## 📖 Project Overview
Technology is a great way to help those in need, as it continous to develop it also presents new possibilities, one such being human vision aided and complemented by computer vision. 

This project consists of a web and mobile based app that generates captions from images captured by the device's camera. The goal of the app is achieved with an easy to use UI from where the users can take a picture, upload it to the app a be presented with an audio caption.

## 📍 Table of Contents
- [Technologies Used](https://github.com/LaloVene/MLH-PE-Project#-technologies-used)
- [Architecture](https://github.com/LaloVene/MLH-PE-Project#-architecture)
- [Site Overview](https://github.com/LaloVene/MLH-PE-Project#-site-overview)
- [Installation](https://github.com/LaloVene/MLH-PE-Project#%EF%B8%8F-installation)
- [Usage](https://github.com/LaloVene/MLH-PE-Project#-usage)
- [Contributing](https://github.com/LaloVene/MLH-PE-Project#-contributing)


## 💻 Technologies Used
- Python
- Angular Ionic
- Flask
- Javascript
- TensorFlow

## 📚 Architecture

The architecture of the app is composed by a client app that captures images and a server app that process the images and returns the captions.
- The client app encodes camera captured images to a base64 string that is sent through a POST request to the server.
- The server app is a Flask container that holds a pretrained Captioning Neural Network composed of a Convolutional Neural Network to extract features of an image and a Recurrent Neural Network that generated captions from the features of the image using a Long Short Term Memory model.
- Once an image is passed as input to the Captioning Neural Network it returns a text caption that is returned to the client app.
- Finally, the client app presents the text caption as an audio output using text-to-speech, once the audio is finished the app returns to the main activity.


## 🔍 Site Overview
### Home Page
Users can select the language of the audio output and press the button that launches a camera intent.


### Camera Page
The user can capture an image and confirm or reject the captured image.



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


 ## 💼 Usage
 Make sure to have ionic installed
 ```bash
$ ionic serve
```
 
## 📝 Contributing
Contributions are welcome! Please refer to the guidelines.




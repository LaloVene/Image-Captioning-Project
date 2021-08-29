# Image-Captioning-Project

### Installing ⚙️

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

## Usage 🖥

Create a .env file using the example.env template

For Flask_Mail two variables will need to be set, EMAIL and EMAIL_PASSWORD. Currently Flask_Mail is configured to work with Gmail so a gmail account should be used. Otherwise, the Flask_Mail configuration settings can be changed in **init\_**.py

Start flask development server

```bash
$ pip install Flask-Mail
$ export FLASK_ENV=development
$ flask run
```

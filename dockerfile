FROM python:3.8-slim-buster

RUN mkdir /website
COPY requirements.txt /website
WORKDIR /website
RUN pip3 install -r requirements.txt

COPY . /website

RUN chmod u+x ./entrypoint.sh
ENTRYPOINT ["sh","./entrypoint.sh"]
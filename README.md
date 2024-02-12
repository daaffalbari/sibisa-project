# SIBISA

> sibisa-be

## LINK WEBSITE

https://sibisa-351215.et.r.appspot.com/ </br>
https://sibisa-351215.et.r.appspot.com/ </br>
https://sibisa-351215.et.r.appspot.com/

## Table of contents

- [Brief Description](#brief-description)
- [Installation Requirements](#installation-requirements)
- [Download Folder](#download-folder)
- [How To Use](#how-to-use)
- [Author](#author)

## Brief Description

Sibisa-be is an Application Programming Interface (API) that used to provide services for SIBISA app.
The following are services provided by Sibisa-be.

1. Authenticating User
2. Providing Lessons for SIBISA
3. Providing Question for SIBISA
4. Manage attributes user

For more documentation, you can click this link https://sibisa-351215.et.r.appspot.com/api-docs

## Installation Requirements

1. NodeJS: https://nodejs.org/en/
2. Account Google Cloud Platform https://console.cloud.google.com/
3. Docker Desktop https://www.docker.com/ (OPTIONAL)

## Download Folder

1. Download the zip file on https://github.com/SIBISA-github/sibisa-be/

## How to Use

### On Local Computer

1. Clone repository Sibisa-be on https://github.com/SIBISA-github/sibisa-be/
2. Open CLI and direct to this repository which already cloned
3. Run npm install
4. Run npm start

### On the Internet

1. click https://sibisa-351215.et.r.appspot.com/

### With docker

1. Make sure you have docker desktop on your local computer
2. Run docker build -t sibisa:0.1 .
3. Run docker run -p 4000:8000 --name sibisa-be-app sibisa:0.1

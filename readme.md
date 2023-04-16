# Web Based Depression Detection using Recurrrent Neural Networks and Speech Analysis

This project a MFCC-based Recurrent Neural Network for automatic clinical depression recognition 
and assessment from speech model deployed as a Web Application. The model is a based on one of the proposed solutions of the paper
[Rejaibi, Emna, Komaty, Ali, Meriaudeau, Fabrice, & Othmani, Morgan-Hiring. (2022). MFCC-based Recurrent Neural Network for Automatic Clinical Depression Recognition and Assessment from Speech. Biomedical Signal Processing and Control, 71, 103107. doi: 10.1016/j.bspc.2021.103107.](https://www.researchgate.net/publication/354324031_MFCC-based_Recurrent_Neural_Network_for_automatic_clinical_depression_recognition_and_assessment_from_speech/citations)

The pre processing function and the model have been is slightly altered . The Dataset used is the [DIAC-WOZ](https://dcapswoz.ict.usc.edu/) dataset

## Required Software

> Python (^3.10) [with PIP]
> NPM (^9.50)
> Node.js (^16.16.0)
> React (^18.2)

## Running the Model on local system

Clone the repository by downloading the zip file or running the *git clone* command like so:
```
git clone https://github.com/RamgopalH/DepressionDetectionUsingLSTM.git
```

### Back End
Change to the **server** folder and do the following:

To set up the python packages, run the followign command o install all pytohn depemdencies
```
pip install numpy pandas pydub IPython librosa scipy tensorflow
```

Install All the required node modules using npm
```
npm init -y
npm install
```

Make sure port 5000 is free on your system or change the value of **PORT** in the *index.js* file

To start the server, run
```
nodemon index.js
```
### Front End

Switch to the **client** folder and set up the frontend of the application

Install all required Node packages and React packages using NPM
```
npm init -y
npm install
```

Make sure sever is running before running the client with the following command
```
npm run dev
```

It displays a url in the command prompt and following this url should take you to the home page of the application.

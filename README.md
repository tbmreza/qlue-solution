## qlue-solution

### Objectives

- Camera/video live view.
- Crop and display detected face.
- Recognize detected face.

### Approach

Why Javascript web application:

- For future integration with dashboards, web application is the way to go.
- I have always wanted to learn Javascript and NodeJS.

### Frameworks

- Web framework: [express](https://github.com/expressjs/express)
- Face recognition: [face-api.js](https://github.com/justadudewhohacks/face-api.js)

### Requirements (Ubuntu users warning)

- Install Node and npm using NVM.
- Set permissions: `sudo chown -R $(whoami) ~/.npm`

### Usage

```bash
npm install
npm start
```

I also deploy the app on heroku: [https://reza-qlue-solution.herokuapp.com](https://reza-qlue-solution.herokuapp.com)

### Jawaban soal

#### Jelaskan dalam bentuk flowchart bagaimana cara anda mengintegrasikan engine anda dengan sistem lain.

- **Segi model face recognition** API face-api.js menggunakan model convolutional neural network dengan tensorflow.js secara modular, yakni beberapa file dalam folder `weights`. Sehingga, sistem ini dapat diintegrasikan ke dalam struktur Dashboard lain.

- **Segi bentuk aplikasi** Sistem ini me-load model face recognition dari HTML dalam folder `views`. Sehingga, model eksisting juga dapat diintegrasikan ke dalam sistem ini. 

#### Jelaskan metode / algoritma / paper yang anda gunakan untuk membuat engine tersebut.

**Model face recognition**

- SSD Mobilenet V1: [Implementasi](https://github.com/yeephycho/tensorflow-face-detection) paper [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/abs/1704.04861). Dibandingkan dengan Tiny Face Detector, model ini lebih akurat, tetapi frame rate-nya lebih rendah.

- Tiny Face Detector: Implementasi face-api.js untuk Tiny Yolo V2. Metode ini mengganti konvolusi pada umumnya CNN dengan depthwise separable convolutions.

var canvas = null;
function createP5 (){


  if (canvas === null){
            canvas = new p5(function (p) {


             p.sound; // 声音
             p.amp; // 振幅
             p.offset = 0; // 偏移量
             p.mountain_width = 200;
             p.distance = 0; // 山峰绘制

             p.mountain_layers;
             p.mountain_layers_count = 7;
             p.r_spaces = [[0.05, 0.08], [0.08, 0.1], [0.1, 0.13], [0.13, 0.18], [0.18, 0.2], [0.2, 0.25], [0.25, 100]];
             p.delta_dis = [0.6, 0.5, 0.5, 0.4, 0.3, 0.1, 0.1];
             p.base_colors = ['hsb(40, 67%, 76%)', 'hsb(87, 38%, 73%)', 'hsb(163, 56%, 84%)', 'hsb(170, 54%, 91%)', 'hsb(187, 65%, 87%)', 'hsb(203, 93%, 100%)', 'hsb(201, 99%, 86%)'];

              p.preload = function() {
                 p.sound = p.loadSound('music/guanju.mp3');
              }


            p.setup = function (){
              p.createCanvas(2000, 150);
              p.setupSound();
              // 设置背景（目前是渐变色，从上到下线性）
              p.setupBackground();
              // 设置山峰、云层☁️
              p.setupGraphics();
              //p.playSound();
            }


            // 播放音乐
            p.playSound = function() {
              p.sound.play();
            }


            // 点击播放音乐
            p.mousePressed = function() {
              if (!p.sound.isPlaying()) {
                p.playSound();
              }else{
                
              }
            }

            p.setupSound = function() {
              p.amp = new p5.Amplitude();
              p.amp.setInput(p.sound);

              p.fft = new p5.FFT();
              p.fft.setInput(p.sound);
            }

            // 设置前、中、后山峰的几个图层
            p.setupGraphics = function() {
              p.mountain_layers = [];
              for (let i = 0; i < p.mountain_layers_count; i++) {
                p.mountain_layers[i] = p.createGraphics(p.width, p.height);
                p.mountain_layers[i].clear();
              }
            }

            p.setupBackground = function() {

              /*p.colorMode(p.RGB);

              // 背景渐变色 从上往下的线性渐变(RGB模式)，可以调整上c1、下c2的颜色值
              p.c1 = p.color(190, 167, 87);
              p.c2 = p.color(190, 167, 87);
              for (p.i = 0; p.i < p.height; p.i+=0.1) {
                p.c = p.lerpColor(p.c1, p.c2, i / p.height);
                p.stroke(p.c);
                p.line(0, p.i, p.width, p.i);
              }*/
            }





            p.draw = function(){
            //p.background(255);
            p.setupBackground();
            
            //p.playSound();
            
            p.colorMode(p.HSB, 255);
            p.vol = p.amp.getLevel();
            p.r = p.map(p.vol, 0, 1, 0, 5);

            p.offset += 1;

            for (p.i = 0; p.i < p.r_spaces.length; p.i++) {
              p.lower = p.r_spaces[p.i][0];
              p.high = p.r_spaces[p.i][1];
              if (p.r >= p.lower && p.r < p.high) {
                // let index = floor(random(mountain_layers_count));
                p.index = p.i;
                p.base_color = p.color(p.base_colors[p.index]);
                p.ch = p.hue(p.base_color) + p.vol * 4 * p.random(-4, 4);
                p.cs = p.saturation(p.base_color) + p.vol * 100 * p.random(2, 4)
                p.cb = p.brightness(p.base_color) + p.vol * 500 * p.random(1, 2);;
                p.alpha = p.map(p.i, 0, p.mountain_layers_count, 255, 100);

                p.mountain_layers[p.i].beginShape();
                p.mountain_layers[p.i].colorMode(p.HSB, 255);
                p.mountain_layers[p.i].fill(p.ch, p.cs, p.cb, p.alpha);
                p.mountain_layers[p.i].noStroke();
                for (p.x = 0; p.x < p.mountain_width; ++p.x) {
                  p.posx = p.x + p.distance * 2;
                  p.posy = (p.height + 0 - (p.i + p.r * 5) * 0) - (50 + p.i * 20) / (1 + p.pow(p.x - 100, 6) / 8000e6) * p.r * p.noise(p.x / 50 + p.offset / (50 + p.i * 100) + p.height / 50) * 1;
                  p.mountain_layers[p.i].vertex(p.posx, p.posy);
                }
                p.mountain_layers[p.i].endShape();


                p.distance += p.delta_dis[p.i];
              } else {
                continue;
              }
            }

            for (p.i = p.mountain_layers_count - 1; p.i >= 0; p.i--) {
              p.image(p.mountain_layers[p.i], 0, 0);
            }
            }
            }, "canvas-div");
        }
    }
    createP5 ();















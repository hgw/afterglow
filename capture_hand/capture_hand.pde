PGraphics alphaG;
import SimpleOpenNI.*;

SimpleOpenNI  context;

int w=320;
int h=240;

color[] cs1 = new color[w*h];
color[] cs2 = new color[w*h];
int pcount = 0;

int spot = 212;
int Xoffset = 20;
int Yoffset = 0;


void setup()
{
  frameRate(20); 
  context = new SimpleOpenNI(this);
  // enable depthMap generation 
  context.enableDepth();
  // enable camera image generation
  context.enableRGB();
  background(0, 0, 0);
  size(w, h); 
  smooth();
  //print(context.rgbHeight());
}

void draw()
{
  //spot = mouseX/2;
  println(spot);
  alphaG = createGraphics(width, height, JAVA2D);
  alphaG.beginDraw();

  // update the cam
  context.update();

  // draw depthImageMap
  context.depthImage().filter(BLUR,2);
  alphaG.image(context.depthImage(), 0, 0);
  alphaG.loadPixels();
  // draw camera
  for (int i = 0; i < w*h; i++) {
    cs1[i] = alphaG.pixels[i];
  }

  alphaG.image(context.rgbImage(), 0+Xoffset, 0+Yoffset);
  alphaG.loadPixels();
  cs2 = alphaG.pixels;

  for (int i = 0; i < w*h; i++) {
    cs2[i] = alphaG.pixels[i];
  }


  for (int i=0;i<w*h;i++) {
    float Red=red(cs1[i]);
    if (Red < spot) {
      cs2[i] = color(0, 0, 0, 0);
    }
  }

  for (int i = 0; i < w*h; i++) {
    alphaG.pixels[i] = cs2[i];
  }

  alphaG.updatePixels();
  alphaG.endDraw();

  image(alphaG, 0, 0);

  alphaG.save("../htdocs/finger-storage/m" + pcount +".png");
  pcount++;
  if (pcount >= 2) {
    pcount = 0;
  }
}


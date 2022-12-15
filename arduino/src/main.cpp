#include <Arduino.h>
#include <stdlib.h>
#include <time.h>
#define POSITION 3

//portas dos leds
const int vermelho_led = 7;
const int amarelo_led = 5;
const int verde_led = 2;

int teclado = 0;
int numRand = 0;

void verde() { digitalWrite(verde_led, HIGH); }
void amarelo() { digitalWrite(amarelo_led, HIGH); }
void vermelho() { digitalWrite(vermelho_led, HIGH); }

void setup(){
  srand(time(NULL)); //semnete aleatória por hora do sistema
  Serial.begin(9600);

  pinMode(vermelho_led, OUTPUT);
  pinMode(amarelo_led, OUTPUT);
  pinMode(verde_led, OUTPUT);
}

void desligaLeds(){
  digitalWrite(vermelho_led, LOW);
  digitalWrite(amarelo_led, LOW);
  digitalWrite(verde_led, LOW);
}

void loop(){
  
  // se tiver uma nova entrada no porta ouvida 9600 atualizar teclado
  if (Serial.available() > 0) {
    teclado = ((Serial.read()) - (48));

    /* 
      Serial.print("Velocidade arduino: ");
      Serial.println(teclado); 
    */
  }

  // tempo para ligar próximo led
  delay(teclado * 100);

  // setar led aleatório
  numRand = (1+(rand() % POSITION));

  /* 
    Serial.print("rand: ");
    Serial.println(numRand); 
  */
  
  // ligar/desligar led aleatório
  switch ( numRand ){
    case 1:
      desligaLeds();
      verde();
      break;
    case 2:
      desligaLeds();
      amarelo();
      break;
    case 3:
      desligaLeds();
      vermelho();
      break;
  }
}
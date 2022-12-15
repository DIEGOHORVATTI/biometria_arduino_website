#!/usr/bin/python3

import serial
from rich.panel import Panel
from rich.console import Group
from rich.console import Console
from rich.panel import Panel

port = '/dev/ttyACM0'
speed = 9600
conect = serial.Serial(port, speed)
console = Console(); panel_group = Group(
  Panel(
      "Insira uma velocidade de 0 á 10", style="green"
    ),
)
console.print(Panel(panel_group))

while True:
  teclado = input('Velocidade python: ')
  conect.write(teclado.encode())

  if teclado == '':
    break

conect.close()

import json
import math
import tkinter

class Vector2:
  def init(self, x, y):
    self.x = x
    self.y = y

class Object2D:
  def init(self):
    self.position = Vector2(0, 0)
    self.rotation = Vector2(0, 0)
    self.scale = Vector2(1, 1)
    self.name = ""
    self.userData = json.loads("{}")
    

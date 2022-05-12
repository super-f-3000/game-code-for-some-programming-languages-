import json
import math
import tkinter

class Vector2:
  def init(self, x, y):
    self.x = x
    self.y = y

class Object2D (object):
  def init(self, name):
    self.position = Vector2(0, 0)
    self.rotation = Vector2(0, 0)
    self.scale = Vector2(1, 1)
    self.name = name
    self.userData = json.loads("{}")
    self.children = []

class Scene (Object2D):
  def init(self):
    self.type = "GAME.Scene"
    self.background = None
    

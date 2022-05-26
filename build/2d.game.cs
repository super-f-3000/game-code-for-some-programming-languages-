using System.Windows.Forms;
using System.Drawing;

namespace GAME
{
  public class UserData
  {
    bool IA = false
  }
  public class Vector2
  {
    int x;
    int y;
    public Vector2 (int X, int Y)
    {
      x = X;
      y = Y;
    }
  }
  public class Object2D
  {
    Vector2 position = new Vector2(0, 0);
    Vector2 rotation = new Vector2(0, 0);
    Vector2 scale = new Vector2(1, 1);
    string name = "";
    object[] userData = new object[];
    object[] children = new object[];
    public static void Add (Element obj)
    {
      if (obj.type == "GAME.Element class") {
        this.children.add(obj);
      }
    }
  }
  public class Element : Object2D
  {
    string type = "GAME.Element class";
    public Element (string elemType, string Text)
    {
      if (elemType == "Button") {
        Button element = new Button();
      }
      name = Text;
      element.Text = name;
    }
  }
  public class Scene : Object2D
  {
    string type = "GAME.Scene class";
    Size maxSize;
    Size minSize:
    public Scene (Size max, Size min)
    {
      maxSize = max;
      minSize = min;
    }
  }
  public class Renderer : Form
  {
    public static void render (Scene scene)
    {
      if (scene.type == "GAME.Scene class") {
        this.Text = scene.name;
        Application.Run(this);
      }
    }
  }
}

using System.Windows.Forms;
using System.Drawing;

namespace GAME
{
  public class UserData
  {
    bool IA;
    public UserData ()
    {
      IA = false;
    }
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
    string name;
    object[] userData = new object[];
    object[] children = new object[];
    public Object2D ()
    {
      name = "";
    }
  }
}

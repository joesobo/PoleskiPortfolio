???+ ad-tip Info

tags: #🕸️/🟦  
References: [[🔲 Unity]]
Links:

--- admonition

<br>

# `$= dv.current().file.name`

Field attributes are properties that are publicly exposed to be modified by the user.

Basic Example of script:

```cs
public class Barrel : MonoBehaviour {
	public float range = 1;
	public float damage = 10;
	public Color color = Color.red;
}
```

This displays information to the user, but is also very open ended and doesn't help the level designer quickly setup or limit to the scope.

#### Attributes

- `Range(start, end)` - Sets a field to be a slider between start and end point
- `[SerializeField]` - Serialize

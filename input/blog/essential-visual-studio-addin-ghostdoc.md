Title: Essential Visual Studio Addin - ghostdoc
Published: 18/7/2010
Tags:
- Addin
- Series
- Visual Studio 2008
---

This blog post is one of a series of blogs on Visual Studio Addins that I use.  To go back to the series index page, click [here](http://www.gep13.co.uk/blog/essential-visual-studio-2008-addin-series).

# GhostDoc

If you use few Visual Studio Addin’s, this should definitely be one of them:

[http://submain.com/products/ghostdoc.aspx](http://submain.com/products/ghostdoc.aspx)

To get straight to the point, not mention people “like” commenting their code, but everyone knows that it should be done.  Using a few basics of the English language, this little addin can take something like the following:

```csharp
public partial class Form1 : Form
{
  public bool IsEnabled { get; set; }

  public Form1()
  {
    InitializeComponent();
  }
}
```

And turn it into the following:

```csharp
/// <summary>
/// 
/// </summary>
public partial class Form1 : Form
{
  /// <summary>
  /// Gets or sets a value indicating whether this instance is enabled.
  /// </summary>
  /// <value>
  ///     <c>true</c> if this instance is enabled; otherwise, <c>false</c>.
  /// </value>
  public bool IsEnabled { get; set; }

  /// <summary>
  /// Initializes a new instance of the <see cref="Form1"/> class.
  /// </summary>
  public Form1()
  {
    InitializeComponent();
  }
}
```

I have noted that it works very well at pulling through comments on base types which you are inheriting from.

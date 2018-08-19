# Test suite for new features

This is a playground for experimental/upcoming features for [PIMD – a Markdown renderer with focus on extendibility]() which was born out of the [LivingStyleGuide project](https://github.com/livingstyleguide/livingstyleguide).

The Markdown source code of the file you are looking at [can be found on GitHub](https://raw.githubusercontent.com/hagenburger/pimd-experimental/master/test.md).


## Highlight

This example highlights the important part to help understanding the code example:

``` test-2.html +syntax +preview highlight=/class="my-list-item"/
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To highlight parts of the source add to the code block:

```` markdown +syntax highlight=/highlight.+/ +showmore=3-14
``` html highlight=/class="my-list-item"/
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!


## Highlight all

When using regular expressions with the `g` modifier, multiple highlights can be generated:

``` test-2.html +syntax +preview highlight=/class="my-list-item"/g
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To highlight parts of the source add to the code block:

```` markdown +syntax highlight=/highlight.+/ +showmore=3-14
``` html highlight=/class="my-list-item"/g
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!


## Highlight all

Of course, a regular expression can be written more useful:

``` test-2.html +syntax +preview highlight=/class=".*?"/g
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To highlight parts of the source add to the code block:

```` markdown +syntax highlight=/highlight.+/ +showmore=3-14
``` html highlight=/class=".*?"/g
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!


## Highlight multiple rules

Multiple rules can either be done by using the or (`|`) in the regular expression or by providing
multiple regular expressions separated by `;`:

<p style="color: red">
  This does not work yet!
</p>

``` test-2.html +syntax +preview highlight=/my-list-item|my-special-list-item/g;/<li/
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To highlight parts of the source add to the code block:

```` markdown +syntax highlight=/highlight.+/ +showmore=3-14
``` html highlight=/my-list-item|my-special-list-item/g;/<li/
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!


## Showmore

All 4 list items in the example above might be needed for the preview but pollute the code block.
Hiding list item 2 upto 4 makes the example looks much more simple. If needed, the code can be
expanded:

``` test-2.html +syntax +preview highlight=/class="my-list-item"/ showmore=5-13
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To hide parts of the source add to the code block:

```` markdown +syntax highlight=/showmore.+/ +showmore=3-14
``` html showmore=5-13
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!


## Links

If there is a definition for something, it can be linked:

``` test-2.html +syntax +preview link=/class/g=https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class;/my-special-list-item/g=#my-special-list-item
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```

To link parts of the source add to the code block:

```` markdown +syntax highlight=/link.+/ +showmore=3-14
``` html link=/class/g=https://...;/my-special-list-item/g=#my-special-list-item
<ul>
  <li class="my-list-item">
    Item 1
  </li>
  <li class="my-list-item my-special-list-item">
    Item 2
  </li>
  <li class="my-list-item">
    Item 3
  </li>
  <li class="my-list-item">
    Item 4
  </li>
</ul>
```
````

Open the [specification for this feature](https://github.com/hagenburger/pimd/issues/19) on GitHub. **Comments? Questions? Feedback?** Feel free to discuss on the ticket!

---

Created by Nico Hagenburger. Released under MIT licence (see [repository](https://github.com/hagenburger/pimd-experimental)).

**Feedback** is very welcome. Do you like those features? Do you have an opinion about the naming/the syntax? Ping me [on Twitter](https://twitter.com/hagenburger) or open an issue
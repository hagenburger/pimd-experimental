# Test suite for new features

## Highlight

This example highlights the important part to help understanding the code example:

~~~ test-2.html +syntax +preview highlight=/class="my-list-item"/
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
~~~


## Highlight all

When using regular expressions with the `g` modifier, multiple highlights can be generated:

~~~ test-2.html +syntax +preview highlight=/class="my-list-item"/g
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
~~~


## Highlight all

Of course, a regular expression can be written more useful:

~~~ test-2.html +syntax +preview highlight=/class=".*?"/g
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
~~~


## Highlight multiple rules

Multiple rules can either be done by using the or (`|`) in the regular expression or by providing
multiple regular expressions separated by `;`:

<p style="color: red">
  This does not work yet!
</p>

~~~ test-2.html +syntax +preview highlight=/my-list-item|my-special-list-item/g;/<li/
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
~~~


## Showmore

All 4 list items in the example above might be needed for the preview but pollute the code block.
Hiding list item 2 upto 4 makes the example looks much more simple. If needed, the code can be
expanded:

~~~ test-2.html +syntax +preview highlight=/class="my-list-item"/ showmore=5-13
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
~~~


## Links

If there is a definition for something, it can be linked:

~~~ test-2.html +syntax +preview link=/class/g=https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class;/my-special-list-item/g=#my-special-list-item
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
~~~

Nulla aliqua anim cupidatat nostrud dolore sint. Laborum nostrud nulla do labore mollit dolor amet
incididunt irure amet. Adipisicing mollit consequat nisi sint commodo officia fugiat commodo
cupidatat. Aliquip enim velit in magna consequat anim do amet exercitation est consectetur. Est ea
amet anim velit labore occaecat est exercitation Lorem. Laboris deserunt ea culpa dolore aliquip
proident culpa duis irure eiusmod esse quis irure nostrud. Sunt excepteur veniam adipisicing ea eu
esse nisi qui cillum pariatur nisi.

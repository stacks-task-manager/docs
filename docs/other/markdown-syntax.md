# Markdown syntax

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown | Rendered Output |
| --- | --- |
| ```I really like using Markdown.```<br /><br /> ```I think I'll use it to format all of my documents from now on.``` | I really like using Markdown.<br /> <br />I think I'll use it to format all of my documents from now on. |

#### Paragraph Best Practices

Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs.

| ✅  Do this | ❌  Don't do this |
| --- | --- |
| ```Don't put tabs or spaces in front of your paragraphs.```<br /><br />```Keep lines left-aligned like this.``` | <p>&nbsp;&nbsp;&nbsp;&nbsp;This can result in unexpected formatting problems.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't add tabs or spaces in front of paragraphs.</p> |

## Line Breaks

To create a line break or new line (`<br>`), end a line with two or more spaces, and then type return.

| Markdown  | Rendered Output |
| --- | --- |
| ```This is the first line.```<br>```And this is the second line.``` | This is the first line.<br>And this is the second line. |

## Emphasis

You can add emphasis by making text bold or italic.

### Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

| Markdown | Rendered Output |
| --- | --- |
| ```I just love **bold text**.``` | I just love **bold text**. |
| ```I just love __bold text__.``` | I just love __bold text__. |
| ```Love**is**bold``` | Love**is**bold |

### Italic
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

| Markdown | Rendered Output |
| --- | --- |
| ```Italicized text is the *cat's meow*.``` | Italicized text is the *cat's meow*. |
| ```Italicized text is the _cat's meow_.``` | Italicized text is the _cat's meow_. |
| ```A*cat*meow``` | A*cat*meow |

### Blockquotes
To create a blockquote, add a > in front of a paragraph.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

#### Blockquotes with Multiple Paragraphs

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Strikethrough
You can strikethrough words by putting a horizontal line through the center of them. The result looks like this. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols (~~) before and after the words.

`~~The world is flat.~~ We now know that the world is round.`

The rendered output looks like this:

~~The world is flat.~~ We now know that the world is round.

## Underline

`<u>The world is round.</u> We now know that the world is round.`

The rendered output looks like this:

<u>The world is round.</u> We now know that the world is round.

## Highlight
This isn’t common, but some Markdown processors allow you to highlight text. The result looks like this. To highlight words, use two colon signs (`::`) before and after the words.

`I need to highlight these ::very important words::.`

The rendered output looks like this:

I need to highlight these <mark>very important words</mark>.

## Lists
You can organize items into ordered and unordered lists.

### Ordered Lists
To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

| Markdown | Rendered Output |
| --- | --- |
| `1. First item`<br>`2. Second item`<br>`3. Third item`<br>`4. Fourth item` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| `1. First item`<br>`1. Second item`<br>`1. Third item`<br>`1. Fourth item` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| `1. First item`<br>`8. Second item`<br>`3. Third item`<br>`5. Fourth item` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| <code>1. First item</code><br><code>2. Second item</code><br><code>3. Third item<br>&nbsp;&nbsp;&nbsp;&nbsp;1. Indented item<br>&nbsp;&nbsp;&nbsp;&nbsp;2. Indented item</code><br><code>4. Fourth item</code> | <ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol> |

#### Ordered List Best Practices
CommonMark and a few other lightweight markup languages let you use a parenthesis ()) as a delimiter (e.g., 1) First item), but not all Markdown applications support this, so it isn’t a great option from a compatibility perspective. For compatibility, use periods only.

| ✅  Do this | ❌  Don't do this |
| --- | --- |
| `1. First item`<br>`2. Second item` | `1) First item`<br>`2) Second item` |

### Unordered Lists
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

| Markdown | Rendered Output |
| --- | --- | --- |
| `- First item`<br>`- Second item`<br>`- Third item`<br>`- Fourth item` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| `* First item`<br>`* Second item`<br>`* Third item`<br>`* Fourth item` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| `+ First item`<br>`+ Second item`<br>`+ Third item`<br>`+ Fourth item` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| `- First item`<br>`- Second item`<br>`- Third item`<br> <code>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item</code><br>`- Fourth item` | <ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul> |

#### Starting Unordered List Items With Numbers
If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to escape the period.

| Markdown | Rendered Output |
| --- | --- | --- |
| `- 1968\. A great year!`<br>`- I think 1969 was second best.` | <ul><li>1968. A great year!</li><li>I think 1969 was second best.</li></ul> |

#### Unordered List Best Practices
Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don’t mix and match delimiters in the same list — pick one and stick with it.

| ✅  Do this | ❌  Don't do this |
| --- | --- |
| `- First item`<br>`- Second item`<br>`- Third item`<br>`- Fourth item` | `- First item`<br>`+ Second item`<br>`- Third item`<br>`* Fourth item` |

### Task Lists
Task lists (also referred to as checklists and todo lists) allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To select a checkbox, add an x in between the brackets ([x]).

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

The rendered output looks like this:

<img :src="$withBase('/assets/img/other/tasklist.png')">

## Code
To denote a word or phrase as code, enclose it in backticks (`).

| Markdown | Rendered Output |
| --- | --- | --- |
| <code>At the command prompt, type \`nano\`.</code> | At the command prompt, type `nano`. |

#### Escaping Backticks
If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).

| Markdown | Rendered Output |
| --- | --- | --- |
| \`\`Use `code` in your Markdown file.\`\` | ``Use `code` in your Markdown file.`` |

## Code Blocks
To create code blocks, indent every line of the block by at least four spaces or one tab.

````
```
<html>
    <head>
    </head>
</html>
```
````

The rendered output looks like this:

```
<html>
    <head>
    </head>
</html>
```

### Syntax Highlighting

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add color highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

````
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

The rendered output looks like this:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Images

```
1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

3. Close the file.
```

The rendered output looks like this:

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

3. Close the file.

## Horizontal Rules
To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

```
***

---

_________________
```

The rendered output of all three looks identical:

---

### Horizontal Rule Best Practices
For compatibility, put blank lines before and after horizontal rules.

| ✅  Do this | ❌  Don't do this |
| --- | --- |
| Try to put a blank line before...<br><br>---<br><br>...and after a horizontal rule. | Without blank lines, this would be a heading.<br>---<br>Don't do this! |


## Links
To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

`My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## Links to local files

`This is an important [document.pdf](</!C:\Documents\document.pdf>) on my Windows machine.`

or 

`This is an important [document.pdf](</!/Documents/document.pdf>) on my Mac or Linux machine.`

The rendered output looks like this:

This is an important [document.pdf](#) on my Windows machine.

## Emoji
There are two ways to add emoji to Markdown files: copy and paste the emoji into your Markdown-formatted text, or type emoji shortcodes.

### Copying and Pasting Emoji
In most cases, you can simply copy an emoji from a source like [Emojipedia](https://emojipedia.org/) and paste it into your document. Many Markdown applications will automatically display the emoji in the Markdown-formatted text. The HTML and PDF files you export from your Markdown application should display the emoji.

### Using Emoji Shortcodes
Some Markdown applications allow you to insert emoji by typing emoji shortcodes. These begin and end with a colon and include the name of an emoji.

`Gone camping! :tent: Be back soon. That is so funny! :joy:`

The rendered output looks like this:

Gone camping! :tent: Be back soon. That is so funny! :joy:

## Tables
To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. For compatibility, you should also add a pipe on either end of the row.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

The rendered output looks like this:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Cell widths can vary, as shown below. The rendered output will look the same.

```
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
```

### Alignment

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

The rendered output looks like this:

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


## Callouts

```
!> This is a **Primary** callout

v> This is a **Success** callout

?> This is a **Warning** callout

x> This is a **Error** callout
```

The rendered output looks like this:

<img :src="$withBase('/assets/img/other/callouts.png')">

## Confidential text

```
This {{text}} is confidential
```

The rendered output looks like this:

<img :src="$withBase('/assets/img/other/confidential-text.gif')">
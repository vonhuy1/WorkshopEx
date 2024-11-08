+++
title = "Content"
type = ""
weight = 2
pre = "3.2. "
+++

#### Title

There is this header at the top of every page to display the title and define the navigation on the Navigation panel on the left side of the page.
 - `title = "Write content"`
 - `chapter = false` : Leave the default as false. The title above will also display as h1 in the article.
 - `weiht:` Used to sort the index of the title
 - `pre = "<b>2. </b>"` : This is the numbering for the page displayed in **Navigation panel on the left.**
  ![header](/images/3.content/0002-header.png)   
#### Heading Section
- We will agree to use the title for the sections in a page will use h4 (####).

#### Table of Contents (TOC)
1. After writing the content (or finishing listing the Headings of a page), we can build Table of Contents (TOC) automatically by plug-in.

2. Use the key combination `Ctrl + Shift + P` then type in Create Table of Contents and select the plug-in option Markdown All in One. Enter.
   - We will have a TOC like this:

   - Content:
    ![TOC](/images/3.content/0003-tableofcontent.png)

#### Insert icons in the intro
1. We use the icon set downloaded from AWS [here](https://aws.amazon.com/vi/architecture/icons/)
2. Execute the insert command as follows:
    `{< figure src="../images/fcj.png" title="First Cloud Journey" width=150pc >}`


#### Notes
1. In the article, there may be paragraphs that need to be highlighted such as Notes, Warnings,… then the shortcode will be used according to the instructions at [here](https://learn.netlify.app/en/ shortcodes/notice/)

2. Note Note. See more at [Note](https://github.com/Van-Hoang-Kha/van-hoang-kha.github.io/blob/master/source/note.txt)
   > [!NOTE]
   > This is Note

3. Notes Info
   > [!INFO]
   > This is Info

4. Notes Tip
   > [!TIP]
   > This is Tip

5. Notes Warning
   > [!WARNING]
   > This is Warning

6. Notes Caution
   > [!CAUTION]
   > This is Caution

7. Notes Important
   > [!IMPORTANT]
   > This is important

#### Attachment file
1. This section will follow the instructions at [here](https://learn.netlify.app/en/shortcodes/attachments/)

2. The file location will be in the directory corresponding to the md. page name as follows:
   - **_index.md —> _index.files**
   - **- _index.vi.md —> _index.vi.files**

> [!NOTE]
> That is, if there are many languages, each language has 1 such directory for 1 page.

3. **Use the following shortcode to create an attachment:**
 - **title** : Title of attachment
 - **pattern** : Identify the files displayed in the box (you can leave the filename or pattern to identify the tail)

#### Table drawing
To simplify drawing tables, writers often use the tool [Tables Generator](https://www.tablesgenerator.com/markdown_tables#google_vignette)
 - Go to the page.
 - After entering the content, click Generate and then Copy to clipboard.
 - Done here Paste in.
  
#### Image Section
 1. **Recommended screen capture software:** SnagIt (2019/2020)

 2. **Image design:**

To create uniformity and easy understanding for viewers, we define a common standard as follows:

 - About Screenshot Console:
 - Browser: Chrome disable Bookmark bar (recommended)
 - Zoom: Default does not zoom in (100%)
 - Screen Resolution: FullHD (1920 x 1080)
 - Format: PNG (Recommended)
 - About the font inscribed on the picture:
 - Font: Arial Black
 - Size: 18
 - No enable Shadow.
 - Regarding the area marking frame to pay attention:
   - Color: Matches the note text color
   - Thickness: 1 px
   - Opacity: 100%

#### Update config.toml
![UpdateConfig](/images/3.content/0004-updateConfig.png)
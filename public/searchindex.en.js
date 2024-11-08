var relearn_searchindex = [
  {
    "breadcrumb": "First Cloud Journey \u003e Preparation",
    "content": "Download Hugo Theme Lab guide using Hugo Theme. Visit the homepage Hugo Theme to view overview information Go to Install Hugo page to download Hugo Theme depending on operating system After downloading Hugo Theme successfully You will download Workshop sample to your computer at Workshop After downloading Workshop.zip to your computer, extract it Open folder Workshop Open workshop with IDE (Visual Studio Code) Execute the command to check that Hugo has been downloaded successfully: hugo version Run the workshop by command: hugo server Open a browser and type localhost:1313 Make edits In the content folder, edit the content to match the content of your workshop In static/images folder, edit and store your workshop images",
    "description": "Download Hugo Theme Lab guide using Hugo Theme. Visit the homepage Hugo Theme to view overview information Go to Install Hugo page to download Hugo Theme depending on operating system After downloading Hugo Theme successfully You will download Workshop sample to your computer at Workshop After downloading Workshop.zip to your computer, extract it Open folder Workshop",
    "tags": [],
    "title": "Download Hugo Theme",
    "uri": "/2-prerequiste/2.1-hugotheme/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Content",
    "content": "Folder content We make a temporary convention together that we will organize the Lab with 2 maximum levels (eg 2. -\u003e 2.1. corresponding to 2.write-content -\u003e 2.1-Directory structure)\nIn each folder will include:\nSecondary folders. File _index.md : Contains English content. File _index.vi.md : Contains Vietnamese content. If you’re just writing a Vietnamese guide, you’ll copy _index.vi.md to another copy and rename it to _index.md. (For later translation)\nDirectory static/images This will be the folder containing the images for the Lab Guide. All pictures are included here. Folders for images can be hierarchical for easy image management.\nThese images will be used in the article with the image tag: ![This is the image name (Displayed when the image cannot be loaded)](/images/2.1/SNAG001.png?width=90pc)\nTip Use ?width=90pc for full screen images and ?width=40pc or ?width=50pc for crop images.\nFolder public This is the directory that will be created by hugo.\nAfter writing the complete guide or part of the guide and want to check the display, you can run the following command to build the project: $ hugo\nAfter the build is completed, a public folder will appear. Run the server to see the results at: http://localhost:1313 $ hugo server\nHere, try to delete the public folder and run the test to see if this Guide works.",
    "description": "Folder content We make a temporary convention together that we will organize the Lab with 2 maximum levels (eg 2. -\u003e 2.1. corresponding to 2.write-content -\u003e 2.1-Directory structure)\nIn each folder will include:\nSecondary folders. File _index.md : Contains English content. File _index.vi.md : Contains Vietnamese content. If you’re just writing a Vietnamese guide, you’ll copy _index.vi.md to another copy and rename it to _index.md. (For later translation)\nDirectory static/images This will be the folder containing the images for the Lab Guide. All pictures are included here. Folders for images can be hierarchical for easy image management.",
    "tags": [],
    "title": "File structure",
    "uri": "/3-content/3.1-filestructure/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Tổng quan In this tutorial, I will show you how to write Lab Guide and create Workshop\nDownload and use Hugo theme Using Visual Studio Code Use Snagit Use Draw.io Nội dung Introduction Preparation steps Content Complete Workshop",
    "description": "Tổng quan In this tutorial, I will show you how to write Lab Guide and create Workshop\nDownload and use Hugo theme Using Visual Studio Code Use Snagit Use Draw.io Nội dung Introduction Preparation steps Content Complete Workshop",
    "tags": [],
    "title": "First Cloud Journey",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Preparation",
    "content": "Overview Do you have an IDE that has plug-ins that support different languages ​​for your convenience in writing: Visual Studio Code, Atom, Notepad++,… (The writer of this guide is using Visual Studio Code). Plug-ins by IDE: Of course, plug-ins will be needed for Markdown (like Markdown All in One, Markdown TOC,…). Every time I write a file in any language, VS Code also suggests to install the related plug-ins, so I don’t have to worry Content Go to Visual Studio Code to download the IDE You visit the Document page to view detailed information and use the plugin",
    "description": "Overview Do you have an IDE that has plug-ins that support different languages ​​for your convenience in writing: Visual Studio Code, Atom, Notepad++,… (The writer of this guide is using Visual Studio Code). Plug-ins by IDE: Of course, plug-ins will be needed for Markdown (like Markdown All in One, Markdown TOC,…). Every time I write a file in any language, VS Code also suggests to install the related plug-ins, so I don’t have to worry Content Go to Visual Studio Code to download the IDE",
    "tags": [],
    "title": "Get Visual Studio Code",
    "uri": "/2-prerequiste/2.2-ide/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "In this tutorial, I will show you how to write Lab Guide and create Workshop\nDownload support tools and software How to implement file structure How to write content Steps to complete Workshop",
    "description": "In this tutorial, I will show you how to write Lab Guide and create Workshop\nDownload support tools and software How to implement file structure How to write content Steps to complete Workshop",
    "tags": [],
    "title": "Introduction",
    "uri": "/1-introduce/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Content",
    "content": "Title There is this header at the top of every page to display the title and define the navigation on the Navigation panel on the left side of the page.\ntitle = \"Write content\" chapter = false : Leave the default as false. The title above will also display as h1 in the article. weiht: Used to sort the index of the title pre = \"\u003cb\u003e2. \u003c/b\u003e\" : This is the numbering for the page displayed in Navigation panel on the left. Heading Section We will agree to use the title for the sections in a page will use h4 (####). Table of Contents (TOC) After writing the content (or finishing listing the Headings of a page), we can build Table of Contents (TOC) automatically by plug-in.\nUse the key combination Ctrl + Shift + P then type in Create Table of Contents and select the plug-in option Markdown All in One. Enter.\nWe will have a TOC like this:\nContent: Insert icons in the intro We use the icon set downloaded from AWS here Execute the insert command as follows: {\u003c figure src=\"../images/fcj.png\" title=\"First Cloud Journey\" width=150pc \u003e} Notes In the article, there may be paragraphs that need to be highlighted such as Notes, Warnings,… then the shortcode will be used according to the instructions at [here](https://learn.netlify.app/en/ shortcodes/notice/)\nNote Note. See more at Note\nNote This is Note\nNotes Info\nInfo This is Info\nNotes Tip\nTip This is Tip\nNotes Warning\nWarning This is Warning\nNotes Caution\nCaution This is Caution\nNotes Important\nImportant This is important\nAttachment file This section will follow the instructions at here\nThe file location will be in the directory corresponding to the md. page name as follows:\n_index.md —\u003e _index.files - _index.vi.md —\u003e _index.vi.files Note That is, if there are many languages, each language has 1 such directory for 1 page.\nUse the following shortcode to create an attachment: title : Title of attachment pattern : Identify the files displayed in the box (you can leave the filename or pattern to identify the tail) Table drawing To simplify drawing tables, writers often use the tool Tables Generator\nGo to the page. After entering the content, click Generate and then Copy to clipboard. Done here Paste in. Image Section Recommended screen capture software: SnagIt (2019/2020)\nImage design:\nTo create uniformity and easy understanding for viewers, we define a common standard as follows:\nAbout Screenshot Console: Browser: Chrome disable Bookmark bar (recommended) Zoom: Default does not zoom in (100%) Screen Resolution: FullHD (1920 x 1080) Format: PNG (Recommended) About the font inscribed on the picture: Font: Arial Black Size: 18 No enable Shadow. Regarding the area marking frame to pay attention: Color: Matches the note text color Thickness: 1 px Opacity: 100% Update config.toml",
    "description": "Title There is this header at the top of every page to display the title and define the navigation on the Navigation panel on the left side of the page.\ntitle = \"Write content\" chapter = false : Leave the default as false. The title above will also display as h1 in the article. weiht: Used to sort the index of the title pre = \"\u003cb\u003e2. \u003c/b\u003e\" : This is the numbering for the page displayed in Navigation panel on the left. Heading Section We will agree to use the title for the sections in a page will use h4 (####). Table of Contents (TOC) After writing the content (or finishing listing the Headings of a page), we can build Table of Contents (TOC) automatically by plug-in.",
    "tags": [],
    "title": "Content",
    "uri": "/3-content/3.2-content/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Preparation",
    "content": "Download Snagit You can download Snagit from Snagit. Or you can refer to other sites Some features of Snagit",
    "description": "Download Snagit You can download Snagit from Snagit. Or you can refer to other sites Some features of Snagit",
    "tags": [],
    "title": "Download Snagit",
    "uri": "/2-prerequiste/2.3-snagit/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Preparation steps Download Hugo Theme Download IDE Download Snagit Download Active Presenter Download Draw.io",
    "description": "Preparation steps Download Hugo Theme Download IDE Download Snagit Download Active Presenter Download Draw.io",
    "tags": [],
    "title": "Preparation",
    "uri": "/2-prerequiste/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Workshop After completing the steps, we proceed to execute Workshop\nDo the Hand-on Lab once to understand the steps needed. (Note down error steps due to missing (could be IAM Role, Permissions,…) ) Structure for Lab Guide (step by step). This is (probably) also the directory structure of the exercise. Clean up and redo the Lab for the second time. This time record a video (can use Active Presenter) or screenshot each step and number the images in sequence. (can use SnagIt) Write text for Lab Guide. (Leave placeholders for images available) If filming, extract the image from the video (can use VLC Player with Screenshot) and place the image in the specified locations Crop image remove from browser border (If using SnagIt, define fixed capture area remove browser border) Check and format the content with the Notice, add the Attachment (if available)",
    "description": "Workshop After completing the steps, we proceed to execute Workshop\nDo the Hand-on Lab once to understand the steps needed. (Note down error steps due to missing (could be IAM Role, Permissions,…) ) Structure for Lab Guide (step by step). This is (probably) also the directory structure of the exercise. Clean up and redo the Lab for the second time. This time record a video (can use Active Presenter) or screenshot each step and number the images in sequence. (can use SnagIt) Write text for Lab Guide. (Leave placeholders for images available) If filming, extract the image from the video (can use VLC Player with Screenshot) and place the image in the specified locations Crop image remove from browser border (If using SnagIt, define fixed capture area remove browser border) Check and format the content with the Notice, add the Attachment (if available)",
    "tags": [],
    "title": "Workshop",
    "uri": "/4-workshop/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Content File Structure Content",
    "description": "Content File Structure Content",
    "tags": [],
    "title": "Content",
    "uri": "/3-content/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Preparation",
    "content": "Download Snagit You access the page Active Presenter to download to your device. After installing Active Presenter",
    "description": "Download Snagit You access the page Active Presenter to download to your device. After installing Active Presenter",
    "tags": [],
    "title": "Download Active Presenter",
    "uri": "/2-prerequiste/2.4-activepresenter/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Preparation",
    "content": "Download Snagit You can download Draw.io at Draw.io You can use Draw.io on the web at Draw.io Download the latest AWS icon set Here Draw diagrams in the correct format and style. Refer Here\nSome sample architectures\nSample architecture 1: Sample architecture 2: Sample architecture 3:",
    "description": "Download Snagit You can download Draw.io at Draw.io You can use Draw.io on the web at Draw.io Download the latest AWS icon set Here Draw diagrams in the correct format and style. Refer Here\nSome sample architectures",
    "tags": [],
    "title": "Download Draw.io",
    "uri": "/2-prerequiste/2.5-drawio/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]

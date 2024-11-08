+++
title = "File structure"
type = ""
weight = 1
pre = "3.1. "
+++

#### Folder content

1. We make a temporary convention together that we will organize the Lab with 2 maximum levels (eg **2. -> 2.1.** corresponding to **2.write-content -> 2.1-Directory structure**)

2. In each folder will include:
   - Secondary folders.
   - File **_index.md** : Contains English content.
   - File **_index.vi.md** : Contains Vietnamese content.

3. If you’re just writing a Vietnamese guide, you’ll copy **_index.vi.md** to another copy and rename it to **_index.md**. (For later translation)

#### Directory static/images
1. This will be the folder containing the images for the Lab Guide. All pictures are included here. Folders for images can be hierarchical for easy image management.

2. These images will be used in the article with the image tag:
    `![This is the image name (Displayed when the image cannot be loaded)](/images/2.1/SNAG001.png?width=90pc)`
    
    > [!TIP]
    > Use ?width=90pc for full screen images and ?width=40pc or ?width=50pc for crop images.

#### Folder public
1. This is the directory that will be created by hugo.

2. After writing the complete guide or part of the guide and want to check the display, you can run the following command to build the project: `$ hugo`
   
1. After the build is completed, a public folder will appear. Run the server to see the results at: **http://localhost:1313** `$ hugo server`

![FolderContent](/images/3.content/0001-content.png)

*Here, try to delete the public folder and run the test to see if this Guide works.*
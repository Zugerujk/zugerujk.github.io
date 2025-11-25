import glob
from PIL import Image
import os

# VARIABLES TO CHANGE
folder_to_open = "C:/Users/Zug/Documents/GitHub/zugerujk.github.io/blog/blog-media/104/"
disp_type = "blog"
blog_num = "104"
gallery_num = "005"


# Variables for work
images = []
image_names = []
image_names_extension = []
gallery_txt = ""


# Grabs every filename in the folder
for filename in glob.iglob(folder_to_open + "*"):
    img = Image.open(filename) # Tries to open every file
    images.append(img) # Appends it to the images array
    image_names_extension.append(os.path.basename(filename))
    image_names.append(os.path.splitext(os.path.basename(filename))[0]) # Appends the name of it to the names array


# Converts and saves every image
i = 0
for img in images:
    # Grabs image's size
    width, height = img.size 

    # Resizes it to whatever proportionally wide, 70 tall.
    newsize = (int((float(70) * (float(width)/float(height)))), 70) 
    im1 = img.resize(newsize)

    # Saves the thing
    print(image_names[i] + "_sm.png SAVED")
    im1.save(folder_to_open + image_names[i] + "_sm.png")

    # Makes gallery text
    if disp_type == "blog":
        gallery_txt += "                <img class=\"gallery_bar_photo\" src=\"../blog/blog-media/" + blog_num + "/" + image_names[i] + "_sm.png" + "\" title=\"\" onclick=\"galleryPhotoChange('../blog/blog-media/" + blog_num + "/" + image_names_extension[i] + "', '')\">\n"
    elif disp_type == "gallery":
        gallery_txt += "                <img class=\"gallery_bar_photo\" src=\"../images/Gallery/gallery" + gallery_num + "/" + image_names[i] + "_sm.png" + "\" title=\"\" onclick=\"galleryPhotoChange('../images/Gallery/gallery" + gallery_num + "/" + image_names_extension[i] + "', '')\">\n"
    
    # Iterate lol
    i += 1

print(gallery_txt)
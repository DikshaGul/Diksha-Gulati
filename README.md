**SeeColors**

SeeColors is a Python-based project where I explore how to extract and understand colors from images.
The project focuses on reading pixel-level RGB values from images and converting them into meaningful, human-readable color names.
Over time, it is being extended to analyze dominant colors in an image, evaluate color contrast and brightness, and move toward building features that support better color accessibility.
This project is part of my learning journey in Python, image processing, and practical problem-solving.

**What the Project Does**

Takes an image as input from the user

Extracts RGB values from selected pixels

Allows interactive selection of pixels by clicking on the image

Identifies the closest matching color name for given RGB values

Extracts dominant colors present in the image

Maps dominant colors to readable color names for better understanding

Visualizes dominant color palettes extracted from images

Analyzes brightness levels of colors (light / medium / dark)

Computes contrast between colors to identify low-visibility combinations

**Current Progress**

Successfully loaded user-uploaded images and displayed them

Extracted pixel-level RGB values from images

Implemented click-based color detection instead of fixed pixel coordinates

Handled images with transparency (RGBA → RGB conversion)

Mapped RGB values to the closest CSS3 color names

Extracted dominant colors from images and identified their names

Started aligning the project towards color accessibility use cases

Analyzed color brightness (light / medium / dark) to support future visibility warnings

Laid the groundwork for flagging low-visibility or hard-to-distinguish colors

_Accessibility Direction_

Identifying color combinations that may be difficult to distinguish due to low contrast

Using brightness and contrast metrics as early indicators for accessibility issues

Planning to extend this work toward color-blind perception simulation and safer color recommendations

Recent updates focus on moving from basic color identification to understanding color usability, laying the foundation for future accessibility warnings and design-focused insights.


**Tech Stack Used**

Python

NumPy

PIL (Pillow)

Matplotlib

WebColors

scikit-learn

Google Colab

**Learning Goals**

Strengthen understanding of image processing concepts

Improve Python programming and debugging skills

Explore how colors are represented digitally

Work towards building features useful for color-blind accessibility

Apply accessibility-related concepts (contrast, visibility) to real image data rather than theoretical examples

**Status**
Project is under active learning and continuous development, with incremental feature additions and regular experimentation.

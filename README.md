**SeeColors**

SeeColors is a Python-based project where I explore how to extract and understand colors from images.
The project focuses on extracting pixel-level RGB values from images and converting them into meaningful, human-readable color names
The project goes beyond basic color extraction by analyzing dominant colors, evaluating brightness and contrast, and translating these metrics into accessibility-focused insights.
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

**Implemented Features**

Successfully loaded user-uploaded images and displayed them

Extracted pixel-level RGB values from images

Implemented click-based color detection instead of fixed pixel coordinates

Handled images with transparency (RGBA → RGB conversion)

Mapped RGB values to the closest CSS3 color names

Extracted dominant colors from images using clustering techniques

Visualized dominant color palettes extracted from images

Analyzed color brightness (light / medium / dark) to assess visibility

Computed contrast ratios between dominant colors to detect low-contrast combinations

Generated per-color visibility warnings with actionable improvement suggestions

Simulated color vision deficiencies (Protanopia and Deuteranopia) for accessibility analysis

Produced structured accessibility summaries and reports from image colors


_Accessibility Features_

- Detects low-contrast color combinations using contrast ratio analysis  
- Classifies colors by brightness to identify visibility risks  
- Generates per-color visibility warnings and improvement suggestions  
- Simulates how images appear under common color vision deficiencies (Protanopia, Deuteranopia)  
- Produces a structured accessibility report from dominant image colors


_Accessibility Direction_

- Expanding color-blind simulation to additional vision deficiency types  
- Suggesting safer alternative colors based on contrast and brightness analysis  
- Converting accessibility insights into user-facing warnings and recommendations  
- Exploring accessibility-focused design feedback for images and UI elements

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

**Why This Project**

This project was built to bridge the gap between raw image color data and real-world usability.
Instead of stopping at color identification, SeeColors focuses on whether colors are distinguishable, readable, and accessible — especially for users with color vision differences.
It reflects a shift from purely technical output to user-centered analysis.


**Status**
Core functionality completed.
The project now serves as a foundation for accessibility-focused color analysis, with future improvements planned around UI integration, deployment, and usability enhancements.

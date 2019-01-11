# Project2 Description
 
## Topic Selection:
We decided to use a previous dataset from project 1 and visualize it in a more effective and user-friendly way. 
 
## Dataset:
(link to dataset)  
Age-Adjusted Death Rates for 10 Leading Causes of Death in United States over 17 years:
The dataset provides age-adjusted death rates for the 10 leading causes of death in the United States (by state) from the years 1999-2016.
 
## Variable: 
1. Years: 1999-2016
2. Causes of Death: Top 10 Causes of death classified by the International Classification of Diseases, Tenth Revision (ICD–10) and ranked according to the number of deaths assigned to rankable causes (based on the underlying cause of death)
3. State: we’re just using the entire U.S.
4. Number of Deaths: based on resident death certificates filed 
5. Age-Adjusted Death Rate: AGE-ADJUSTED DEATH R
 
## Data Cleaning:
In jupyter notbeook, we limited our dataset to: only the U.S. as a whole (remove state variable) and to follow-up on a subset of the original dataset using some of the analysis completed in Project 1. 
 
## Visualization:
For our final visualization, we created an interactive dashboard using a Python Flask powered RESTful API,  HTML/CSS, JavaScript, and csv data. 
- Line Chart (using plotly) = chosen to allow user to more interactively compare causes of death over time than from static charts in Project 1. the user can select which of the 10 causes to appear on the line graph. The user can view specific values upon hover 
- Stacked Bar Chart (using highlights js) = chosen to allow user to visually see change in percentages of causes of death over time (versus single pie chart from project 1). The user can view specific values upon hover 
- Pie Chart (using plotly) = chosen to allow user to see distribution of percentages for a specific year. The user can view different years upon selection. The user can view specific values upon hover 
- Bar Chart (using plotly) = ...
  

# Project2 Description
 
## Topic Selection:
We decided to use a previous dataset from project 1 and visualize it in a more effective and user-friendly way. 
- Dataset = Age-Adjusted Death Rates for 10 Leading Causes of Death in United States over 17 years [(link to dataset)](https://data.cdc.gov/NCHS/NCHS-Leading-Causes-of-Death-United-States/bi63-dtpu) The dataset provides age-adjusted death rates for the 10 leading causes of death in the United States (by state) from the years 1999-2016.
- Original Variables:  
1. Years: 1999-2016
2. Causes of Death: Top 10 Causes of death classified by the International Classification of Diseases, Tenth Revision (ICD–10) and ranked according to the number of deaths assigned to rankable causes (based on the underlying cause of death)
3. State: U.S. State
4. Number of Deaths: based on resident death certificates filed 
5. Age-Adjusted Death Rate (per 100,000 people)
 
## Data Cleaning:
In jupyter notbeook, we limited our dataset to: only the U.S. as a whole (remove state variable) and to follow-up on a subset of the original dataset using some of the analysis completed in Project 1. 
 
## Visualization:
For our final visualization, we created an interactive dashboard using a Python Flask powered RESTful API,  HTML/CSS, JavaScript, and csv data. 

### Line Chart (created with plotly js) = 
- chosen to allow user to more interactively compare causes of death over time, replaces the need for numerous static charts in Project 
- features: user can select which of the 10 causes to appear on the line graph and user can view specific values upon hover 

### Stacked Bar Chart (using highlights js) =
- we originally created a pie and bar chart to allow users to see the distribution of percentages for a specific year, with a dropdown option to change years. Thus, they would be more efficient than multiple static pie and bar charts. 
- However, the stacked bar was ultimately chosen to replace them because it allows the user to compare multiple years' distribution of percentages in one glance (aka: it combined what both of the charts were showing).
- features: user can view specific values upon hover 

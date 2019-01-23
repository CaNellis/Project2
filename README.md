# Project2 Description
 
## Topic Selection:
Display U.S. Top Ten Leading Causes of Death from 1999-2016 in an effective and user-friendly way. 
 
## Dataset:
[link to dataset](https://data.cdc.gov/NCHS/NCHS-Leading-Causes-of-Death-United-States/bi63-dtpu)
<br>Age-Adjusted Death Rates for 10 Leading Causes of Death in United States over 17 years:
The dataset provides age-adjusted death rates for the 10 leading causes of death in the United States (by state) from the years 1999-2016.
 
## Variable: 
1. Years: 1999-2016
2. Causes of Death: Top 10 Causes of death classified by the International Classification of Diseases, Tenth Revision (ICD–10) and ranked according to the number of deaths assigned to rankable causes (based on the underlying cause of death)
3. State: we’re just using the entire U.S.
4. Age-Adjusted Death Rate (per 100,000 people)
 
## Data Cleaning:
In jupyter notbeook, we limited our dataset to: only the U.S. as a whole (removed state variable and aggregate causes of death). 
 
## Visualization:
For our final visualization, we created an interactive dashboard using a Python Flask powered RESTful API,  HTML/CSS, JavaScript, and csv data. 

### Line Chart (using plotly js) = 
- chosen to allow the user to interactively compare causes of death over tim. 
- the user can select which of the 10 causes to appear on the line graph. The user can view specific values upon hover 

### Area Chart (using [highcharts](https://www.highcharts.com/))
- chosen to highlight the overall decrease in total death rate as well as change in each causes' contribution for each year. 

### Stacked Bar Chart (using [highcharts](https://www.highcharts.com/)) =
- chosen to highlight the change in a cause of death's contribution to the number of total deaths over time.
- enables user to see how each rate changes over time easier than area chart (example: heart disease gets smaller while accident gets larger)

### Choropleth Map (using plotly js) = not complete
- chosen to display differences in rates among states. 
- the user can toggle the year

### Bubble Chart (using highcharts js) =  not complete

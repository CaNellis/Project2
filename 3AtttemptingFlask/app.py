# import necessary libraries
# import os
# import pandas as pd
# import numpy as np

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# # database setup
# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///data.sqlite"
# db = SQLAlchemy(app)
# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)
# # Save references to each table
# lineData = Base.classes.lineData

# Create a route that renders index.html template
@app.route("/")
def index():
    return render_template("index.html")

# Query the line data and return the jsonified results
@app.route("/line")
def lineData():
    lineData = [{
        "Year": [
            1999, 
            2000, 
            2001, 
            2002, 
            2003, 
            2004, 
            2005, 
            2006, 
            2007, 
            2008, 
            2009, 
            2010, 
            2011, 
            2012, 2013, 2014, 2015, 2016],
        "Alzheimers": [
            16.5, 
            18.1,
            19.3,
            20.8,
            22.1,
            22.6,
            24,
            23.7,
            23.8,
            25.8,
            24.2,
            25.1,
            24.7,
            23.8,
            23.5,
            25.4,
            29.4,
            30.3],
        "CLRD": [
            45.4,
            44.2,
            43.9,
            43.9,
            43.7,
            41.6,
            43.9,
            41,
            41.4,
            44.7,
            42.7,
            42.2,
            42.5,
            41.5,
            42.1,
            40.5,
            41.6,
            40.6], 
        "Cancer": [
            200.8,
            199.6,
            196.5,
            194.3,
            190.9,
            186.8,
            185.1,
            181.8,
            179.3,
            176.4,
            173.5,
            172.8,
            169,
            166.5,
            163.2,
            161.2,
            158.5,
            155.8], 
        "Diabetes": [
            25,
            25.1,
            25.4,
            25.6,
            25.5,
            24.8,
            24.9,
            23.6,
            22.8,
            22,
            21.1,
            20.8,
            21.7,
            21.2,
            21.2,
            20.9,
            21.3,
            21], 
        "Heart": [
            266.5,
            257.6,
            249.5,
            244.6,
            236.3,
            221.6,
            216.8,
            205.5,
            196.1,
            192.1,
            182.8,
            179.1,
            173.7,
            170.5,
            169.8,
            167,
            168.5,
            165.5],  
        "Influenza": [
            23.5, 
            23.7,
            22.2,
            23.2,
            22.6,
            20.4,
            21,
            18.4,
            16.8,
            17.6,
            16.5,
            15.1,
            15.7,
            14.5,
            15.9,
            15.1,
            15.2,
            13.5],  
        "Kidney": [
            13,
            13.5,
            14.1,
            14.4,
            14.7,
            14.5,
            14.7,
            14.8,
            14.9,
            15.1,
            15.1,
            15.3,
            13.4,
            13.1,
            13.2,
            13.2,
            13.4,
            13.1], 
        "Stroke": [
            61.6,
            60.9,
            58.4,
            57.2,
            54.6,
            51.2,
            48,
            44.8,
            43.5,
            42.1,
            39.6,
            39.1,
            37.9,
            36.9,
            36.2,
            36.5,
            37.6,
            37.3], 
        "Suicide": [
            10.5,
            10.4,
            10.7,
            11,
            10.8,
            11,
            10.9,
            11,
            11.3,
            11.6,
            11.8,
            12.1,
            12.3,
            12.6,
            12.6,
            13,
            13.3,
            13.5], 
        "Accident": [
            35.3,
            34.9,
            35.7,
            37.1,
            37.6,
            38.1,
            39.5,
            40.2,
            40.4,
            39.3,
            37.5,
            38,
            39.1,
            39.1,
            39.4,
            40.5,
            43.2,
            47.4]
    }]
    return jsonify(lineData)

if __name__ == "__main__":
    app.run(debug=True)
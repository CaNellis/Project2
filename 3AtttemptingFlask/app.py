import necessary libraries
import os
import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# # database setup
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///data.sqlite"
db = SQLAlchemy(app)
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)
# Save references to each table
lineData = Base.classes.USOnly
barData = Base.classes.barData
pieData = Base.classes.pieData

# Create a route that renders index.html template
@app.route("/")
def index():
    return render_template("index.html")

# Query the line data and return the jsonified results
@app.route("/line")



if __name__ == "__main__":
    app.run(debug=True)
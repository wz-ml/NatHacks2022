import time, io, csv, glob, os
from flask import Flask, request
from flask_cors import CORS
from model import Classifier
import pandas as pd

clf = Classifier()
app = Flask(__name__)
CORS(app)

@app.route('/postcsv', methods = ['POST'])
def predict():
    files = glob.glob('./temp/*')
    for f in files: os.remove(f)
    content = request.files['data']
    print(content)
    stream = io.StringIO(content.stream.read().decode("UTF-8"), newline = None)
    df = pd.read_csv(stream)
    preds = clf.process(df)
    return preds

if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')
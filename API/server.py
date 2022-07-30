import time
from flask import Flask, request
from server import Classifier

clf = Classifier()
app = Flask(__name__)

@app.route('/model', methods = ['POST'])
def predict():
    if request.method == 'POST':
        data = request.form
        return clf.process(data)
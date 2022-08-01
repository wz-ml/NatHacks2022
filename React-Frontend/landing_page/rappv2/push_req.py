import os
import sys
import requests


def push_data():
    # Find path
    PATH = os.path.dirname(os.path.abspath(__file__))
    # delete residue csv files
    filenames = os.listdir(PATH)
    try:
        csv_files = list(filter(lambda f: f.endswith('.csv'), filenames))
        for a in csv_files:
            os.remove(a)
    except:
        _ = 0
    # record data
    os.system('muselsl record_direct --duration 10')

    # Find file
    filenames = os.listdir(PATH)
    csv_files = list(filter(lambda f: f.endswith('.csv'), filenames))
    print("Submitting with" + os.path.abspath(csv_files[0]))
    r = requests.post("http://127.0.0.1:5000/postcsv",
                      files={'data': open(csv_files[0], 'rb')})
    print(r.text)  # displays the result body.


push_data()

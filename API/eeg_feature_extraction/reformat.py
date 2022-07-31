import pandas as pd
import os
from eeg_feature_extraction.EEG_generate_training_matrix import gen_training_matrix

def reformat(df):
    #The following code takes in raw csv data from the Muse Headband and converts it into legible data
    #Read relevant columns
    _ = None
    #remove files to start fresh
    try:
        os.remove('output.csv')
    except:
        _ = None
    try:
        os.remove('temp.csv')
    except:
        _ = None
    try:
        os.remove('processed_output.csv')
    except:
        _ = None
    #Read data from file
    df = df[['timestamps', 'TP9', 'AF7', 'AF8', "TP10", "Right AUX"]]
    first_column = df.pop('timestamps')
    df.insert(0, 'timestamps', first_column)

    df.to_csv('temp.csv')
    #Remove initial commas from data
    with open('temp.csv') as f:
        lines = f.readlines()
    fixed_lines = []
    for a in lines:
        count = 0
        for b in a:
            if b == ',':
                fixed_lines.append(a[count+1:])
                break
            else:
                count += 1

    #output final processed data
    f = open('output.csv', 'w')
    f.writelines(fixed_lines)
    f.close()

    #generates training matrix
    gen_training_matrix('output.csv', 'processed_output.csv', -1)
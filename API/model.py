import pandas as pd
import numpy as np
import xgboost as xgb
import sys, os

sys.path.append("./eeg-feature_extraction")
from eeg_feature_extraction.EEG_generate_training_matrix import gen_training_matrix
from eeg_feature_extraction.reformat import reformat

class Classifier():
    def __init__(self):
        train_df = []
        for file in os.listdir('./train'):
            df = pd.read_csv('./train/' + file)
            df['Label'] = file.split('_')[0].replace('2','')
            train_df.append(df)
        df = pd.concat(train_df)
        df['Label'] = df['Label'].map({'sad': 0,
                            'neutral': 1,
                            'happy': 2})
        X = df.drop('Label', axis=1)
        y = df['Label'].copy()
        print("Training size:", X.shape)
        self.model = self.get_model()
        self.model.fit(X, y)
        print("Model active.")

    def get_model(self):
        params={ 'objective':'multi:softprob',
        'max_depth': 6, 
        'n_estimators':100, # Modify this later
        'colsample_bylevel':0.5,
        'colsample_bytree':0.6,
        'learning_rate':0.2,
        'random_state':20,
        'alpha':10,
        'lambda':8,
        'num_class': 3}
        xgb_cl = xgb.XGBClassifier(**params)
        return xgb_cl

    def process(self, df):
        reformat(df)
        df = pd.read_csv("processed_output.csv").drop('Label', axis=1)
        preds = self.model.predict(df)
        return str(np.mean(preds))
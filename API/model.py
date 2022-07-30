import pandas as pd
import numpy as np
import xgboost as xgb

class Classifier():
    def __init__(self, MODEL_PATH):
        self.model = self.get_model(MODEL_PATH)

    def get_model(self, PATH):
        params={ 'objective':'multi:softprob',
        'max_depth': 6, 
        'n_estimators':100, # Modify this later
        'colsample_bylevel':0.5,
        'colsample_bytree':0.6,
        'learning_rate':0.2,
        'random_state':20,
        'alpha':10,
        'lambda':8}
        xgb_cl = xgb.XGBClassifier(**params)
        xgb_cl.load_model(PATH)
        return xgb_cl

    def process(self, DATA_PATH):
        df = pd.read_csv(DATA_PATH)
        preds = self.model.predict(df)
        return preds

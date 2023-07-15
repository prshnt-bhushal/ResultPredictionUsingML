import joblib
import numpy as np
import pandas as pd
from flask import jsonify

# Input the previous subject scores of the new student
def predict_grades(previous_scores):
        # Determine the length of previous_scores
    length = len(previous_scores)

    # Load the appropriate model based on the length
    if length == 6:
        model_path = 'Model6.joblib'
    elif length == 12:
        model_path = 'Model12.joblib'
    elif length == 18:
        model_path = 'Model18.joblib'
    elif length == 24:
        model_path = 'Model24.joblib'
    elif length == 30:
        model_path = 'Model30.joblib'
    elif length == 36:
        model_path = 'Model36.joblib'
    elif length == 42:
        model_path = 'Model42.joblib'
    # Load the trained model
    stacked_model = joblib.load(model_path)
    X_new = np.array([previous_scores])
    predicted_scores = stacked_model.predict(X_new)
    print('----------------------------------------------------------------------------')

    # Converting predicted_scores into grading system
    grading_system = {
        (0.0,1.2): 'F',
        (1.2, 1.3): 'D+',
        (1.3, 1.7): 'C-',
        (1.7, 2.0): 'C',
        (2.0, 2.3): 'C+',
        (2.3, 2.7): 'B-',
        (2.7, 3.0): 'B',
        (3.0, 3.3): 'B+',
        (3.3, 3.7): 'A-',
        (3.7, 4.0): 'A'
    }

    # Load the subject names from subjects.csv
    subjects_df = pd.read_csv('subjects.csv')
    subject_names = subjects_df['Subjects'].tolist()

    num_remaining_subjects = len(previous_scores)
    remaining_subjects = subject_names[num_remaining_subjects:]

    predicted_grades = []
    for scores in predicted_scores:
        subjects = []
        for i, score in enumerate(scores):
            for score_range, grade in grading_system.items():
                if score_range[0] <= score <= score_range[1]:
                    subject ={
                        'name': remaining_subjects[i],
                        'grade': grade
                    }
                    subjects.append(subject)
    print("Predicted Grades for Upcoming Subjects:", subjects)
    return jsonify({'subjects': subjects})

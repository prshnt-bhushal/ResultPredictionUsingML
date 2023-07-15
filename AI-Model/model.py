import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.multioutput import MultiOutputRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import time
import warnings
import joblib
warnings.simplefilter('ignore') 

# 1. Data Importing
dataframee = pd.read_csv("prev_data.csv", header=0)
dataframee = dataframee.set_index('Exam Roll No.')

# 2. Data Interpolation
df = pd.read_csv('prev_data.csv')

num_samples = 1000
step_size = 1 / (num_samples + 1)
interpolated_df = pd.DataFrame()

for column in df.columns:
    column_values = df[column].values
    synthetic_values = np.interp(np.arange(1, num_samples + 1) * step_size, np.arange(len(column_values)), column_values)
    interpolated_df[column] = synthetic_values

final_df = pd.concat([df, interpolated_df], ignore_index=True)
final_df = final_df.drop_duplicates()


# 4. Feature Engineering
X = final_df.iloc[:, 0:42].values
y = final_df.iloc[:, 42:48].values

# 5. Model Training
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
start_time = time.time()

model1 = RandomForestRegressor(n_estimators=100)
model5 = ExtraTreesRegressor(n_estimators=100)
# model6 = GradientBoostingRegressor(n_estimators=50)

model1.fit(X_train, y_train)

model11 = MultiOutputRegressor(model1)
model55 = MultiOutputRegressor(model5)
# model66 = MultiOutputRegressor(model6)

model11.fit(X_train, y_train)
pred11 = model11.predict(X_test)
mae11 = mean_absolute_error(y_test, pred11)
print("MAE of RandomForest model: ", mae11)

model55.fit(X_train, y_train)
pred55 = model55.predict(X_test)
mae55 = mean_absolute_error(y_test, pred55)
print("MAE of ExtraTreesRegressor model: " ,mae55)

# model66.fit(X_train, y_train)
# pred66 = model66.predict(X_test)
# mae66 = mean_absolute_error(y_test, pred66)
# print("MAE of GradientBoostingRegressor model: " ,mae66)
print('--------------------------------------------------------------')

estimators = [('model1', model11),('model5', model55),]

stacked_model = MultiOutputRegressor(RandomForestRegressor(n_estimators=100))


# Training and evaluating the stacked model using cross-validation
scores = cross_val_score(stacked_model, X_train, y_train, cv=5, scoring='neg_mean_absolute_error')
mae_cv = -scores.mean()
stacked_model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = stacked_model.predict(X_test)


# Stop measuring the runtime
end_time = time.time()

# Calculate the errors
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)


# Print the errors for meta-model
print("Meta-Model Evaluation")
print("Mean Absolute Error (MAE):", mae)
print("Root Mean Squared Error (RMSE):", rmse)
print("R-squared (R2):", r2)
print("Cross-validated MAE:", mae_cv)
print('--------------------------------------------------------')

# Calculate and print the runtime
runtime = end_time - start_time
print("Runtime:", runtime, "seconds")
print(f'Accuracy: {round(r2_score(y_test ,y_pred),3)*100}%')


# Save the trained model
joblib.dump(stacked_model, 'Model42.joblib')
# # 6. Predictions
#Input the previous subject scores of the new student
def predict_grades(previous_scores):
    X_new = np.array([previous_scores])
    predicted_scores = stacked_model.predict(X_new)
    print('----------------------------------------------------------------------------')

    #Converting predicted_scores into grading system
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

    # Get the subject names from the dataset
    subjects_df = pd.read_csv('subjects.csv')
    subject_names = subjects_df['Subjects'].tolist()[42:48]
    predicted_grades = []
    for scores in predicted_scores:
        subject_grades = []
        for i, score in enumerate(scores):
            for score_range, grade in grading_system.items():
                if score_range[0] <= score <= score_range[1]:
                    subject_grades.append((subject_names[i], grade))
                    break
        predicted_grades.append(subject_grades)
    print("Predicted Grades for Upcoming:", predicted_grades)

    return predicted_grades
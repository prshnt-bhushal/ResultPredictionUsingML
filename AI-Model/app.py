from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import predict_grades

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    previous_scores = data['previousScores']
    predicted_grades = predict_grades(previous_scores)
    return predicted_grades

if __name__ == '__main__':
    app.run()

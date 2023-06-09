from flask import Flask, request
from flask_cors import CORS
import numpy as np
import cv2
from keras.models import load_model


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello, Flask!'

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' in request.files:
        image = request.files['image']
        image_path = 'uploads/' + image.filename
        image.save(image_path)
        
        image_width = 64
        image_height = 64
        
        image = cv2.imread(image_path)
        image = cv2.resize(image, (image_width, image_height))
        image = np.expand_dims(image, axis=0)
        image = image / 255.0
        
        model_file = 'signature_classification_model.h5'
        model = load_model(model_file)
        
        prediction = model.predict(image)
        predicted_class = 0 if prediction[0][0] < 0.7 else 1
        print({'predicted_class': predicted_class})
        return {'predicted_class': predicted_class}
    else:
        return {'error': 'No image found in the request'}, 400


if __name__ == '__main__':
    app.run(debug=True)

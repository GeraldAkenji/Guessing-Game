from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game')
def game():
    return render_template('game.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
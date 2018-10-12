from flask import Flask, redirect, render_template, request

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def index():
    return render_template('index.html')

if (__name__) == '__main__':
    app.run(debug=True)
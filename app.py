from flask import Flask, render_template, request

app = Flask(__name__)

def convert(val, conversion_type):
    try:
        val = float(val)
        if val < 0:
            return 'Invalid input! Enter a non-negative number.'
        else:
            if conversion_type == 'dollars_to_gold':
                return val * 1000000 / 3.30
            elif conversion_type == 'dollars_to_unbound':
                return val * 6000 / 100
            elif conversion_type == 'dollars_to_bound':
                return val * 12000 / 100
            elif conversion_type == 'gold_to_bound':
                return val * 396 / 1000000
    except ValueError:
        return 'Invalid input! Enter a number.'

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    if request.method == 'POST':
        value = request.form['value']
        conversion_type = request.form['conversion']
        result = convert(value, conversion_type)
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)

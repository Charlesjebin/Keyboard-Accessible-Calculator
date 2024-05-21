    function appendToResult(value) {
        const resultElement = document.getElementById('result');
        if (resultElement.innerText === '0') {
            resultElement.innerText = value;
        } else {
            resultElement.innerText += value;
        }
    }

    function clearResult() {
        document.getElementById('result').innerText = '0';
    }

    function backspace() {
        const resultElement = document.getElementById('result');
        if (resultElement.innerText.length > 1) {
            resultElement.innerText = resultElement.innerText.slice(0, -1);
        } else {
            resultElement.innerText = '0';
        }
    }

    function calculate() {
        const expression = document.getElementById('result').innerText;
        try {
            const result = eval(expression);
            document.getElementById('result').innerText = result;
        } catch (error) {
            document.getElementById('result').innerText = 'Error';
        }
    }

    // Keyboard support
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            appendToResult(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearResult();
        } else if (key === 'Backspace') {
            backspace();
        }
    });
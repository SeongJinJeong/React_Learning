import React from 'react';

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputEl = React.useRef(null);

    const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
        
        setResult((prevResult)=>{return "정답"+ value});
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputEl.current.focus();
    } else {
        setResult('땡');
        setValue('');
        inputEl.current.focus();
    }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
            <input
                ref={inputEl}
                type="number"
                value={value}
                onChange={onChangeInput}
            />
            <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = GuGuDan;
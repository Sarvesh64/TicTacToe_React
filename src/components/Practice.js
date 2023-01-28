import {useState} from 'react';

export default function MyButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}
        >Clicked {count} times</button>
    );
}

function AboutPage(){
    return(
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}


import {useEffect, useState} from "react";

const Clock = () => {
    const [date, setDate] = useState({date: new Date()});
    const checkMinutesDevided5 = () => {
        return (new Date().getMinutes() % 5 === 0) ? 'время делится на 5' : '';
    };
    const [isMinutesDevided5, setIsMinutesDevided5] = useState(checkMinutesDevided5());

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    const tick = () => {
        setDate({date: new Date()});
        setIsMinutesDevided5 (() => checkMinutesDevided5());
    };

    return (
        <>
            <div> {date.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})} </div>
            <br/>
            <div> {isMinutesDevided5} </div>
        </>


    );
}

export default Clock;
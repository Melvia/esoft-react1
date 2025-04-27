import {useEffect, useState} from "react";
import Greeting from "../Greeting/Greeting.jsx";
import Clock from "../Clock/Clock.jsx";
import Header from "../Header/Header.jsx";


const Container = () => {
    const namesArray = ['Анна', 'Светлана', 'Нина', 'Евгения', 'Любовь'];
    const randomName = () => namesArray[Math.floor(Math.random() * (namesArray.length - 1))];
    const [name, setName] = useState(randomName());
    const [isNameChanged, setChangedName] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 10000);

        return () => {
            clearInterval(timerId);

        }
    }, []);

    const tick = () => {
        setName(randomName());
        if (!isNameChanged) {
            setChangedName(true);
        }
        console.log(isNameChanged)
    };

    return (
        <>
            <Header/>
            <Greeting name={name} isNameChanged={isNameChanged}/>
            <Clock/>
        </>
    );

}

export default Container;
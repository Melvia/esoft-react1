const Greeting = ({name, isNameChanged}) => {
    return !!isNameChanged ? (<div>Привет, у тебя поменялось имя, теперь ты {name}!</div>) : (<div> Привет {name}!</div>);
}

export default Greeting;
import './Greeting.css';

const Greeting = ({name, isNameChanged}) => {
    // return !!isNameChanged ? (<div className="container"> <p>Привет, у тебя поменялось имя, теперь ты {name}!</p></div>) : (
    //     <div className="container"><p>Привет {name}!</p></div>)
    // ;

    return !!isNameChanged ?
        (<div className="container">
            <div className="box">
                <span><p>Привет, у тебя поменялось имя, теперь ты {name}!</p></span>
            </div>
        </div>) :


        (<div className="container">
                <div className="box">
                    <span><p>Привет {name}!</p></span>
                </div>
            </div>)
        ;
}

export default Greeting;
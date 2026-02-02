import {Header} from "./Header.jsx";
import {useState} from "react";

export const Card = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    const send = () => {
        if ( !email || !name ){
            alert("Please enter a valid Input");
            return;
        }

        alert('succes send!')

        setTimeout(() => {
            console.log(name , email)
        }, 1009)

    }

    const scroll = () => {
        document.body.scrollIntoView({behavior: "smooth"});
        document.body.style.top = '0'

    }

    return (
        <>
            <Header/>
            <button>scroll</button>
            <div className="card">
                <input
                    type="text"
                    placeholder="please enter youre name"
                    required={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <input
                    type="text"
                    placeholder="please enter youre email "
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <button onClick={send}>send</button>
            </div>

        </>
    )
}
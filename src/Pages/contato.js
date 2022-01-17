import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'https://dioshopping.herokuapp.com/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
        
        console.log(content)
    }  

    return(
        <>
            <div class="input-group mb-3 mt-5">
                <span class="input-group-text" id="inputGroup-sizing-default">Your Name or Email</span>
                <input value={author} onChange={(event)=>{setAuthor(event.target.value)}} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Your Message</span>
                <input value={content} onChange={(event)=>{setContent(event.target.value)}} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>

            {validator && 
                <div className="form-alert-ops alert alert-warning alert-dismissible fade show mt-2" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {success  && 
                <div className="form-alert-ok alert alert-success alert-dismissible fade show mt-2" role="alert">
                    <strong>Mensagem foi enviada</strong>
                </div>
            }

            <button onClick={sendMessage} className="btn btn-outline-primary">
                Sent
            </button>

            {message.map((content) => {
                return(
                    <div className="card mt-2" key={content.id}>
                        <div className="card-body">
                            <h5 className="card-title">{content.email}</h5>
                            <p className="card-text">{content.message}</p>
                            <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                        </div>
                    </div>
                )
            } )}
        </>
    )
}

export default Contatos;

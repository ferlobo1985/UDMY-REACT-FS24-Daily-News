import { useRef } from 'react';
import { Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const Newsletter = () =>{
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        

    } 


    return(
        <div className='newsletter_container'>
            <h1>Join our newsletter</h1>
            <div className='form'>
                <Form className='mt-4' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='EXAMPLE: youremail@gmail.com'
                            name='email'
                            ref={textInput}
                        />
                    </Form.Group>
                    <Button className='mt-2' variant='primary' type='submit'>
                        Add me to the list
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export default Newsletter;
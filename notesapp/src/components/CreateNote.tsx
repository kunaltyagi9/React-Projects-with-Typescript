import { useState } from "react";

import { Box, InputBase, Button, styled } from "@mui/material";
import { v4 as uuid } from 'uuid';

import { NoteObject } from "../models/note";

const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width: 300px;
    }
    & > div > input[type="color"] {
        position: relative;
        bottom: -10px;
        width: 40px;
        height: 30px;
    }
`

const defaultObj = {
    id: uuid(), 
    title: '',
    text: '',
    color: '#F5F5F5',
    date: (new Date().getUTCDate()).toString()
}
// Date cannot be used directly as a React Child.

interface ICreateNoteProps {
    addNote: (note: NoteObject) => void,
    setError: React.Dispatch<React.SetStateAction<string>>
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNote, setError }) => {

    const [note, setNote] = useState<NoteObject>(defaultObj);

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(e);
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const onCreateNote = () => {
        if (!note.title && !note.text) {
            setError('All fields are mandatory');
        }

        addNote(note);
        console.log(note);
    }

    return (
        <Container>
            <InputBase 
                name="title" 
                value={note.title} 
                onChange={(e) => onValueChange(e)} 
                placeholder="Title" 
            />
            <InputBase 
                name="text" 
                value={note.text} 
                onChange={(e) => onValueChange(e)} 
                placeholder="Details" 
            />
            <InputBase 
                type="color"
                defaultValue={'#F5F5F5'}  
                value={note.color} 
                onChange={(e) => onValueChange(e)} 
                placeholder="Choose color" 
            />
            <Button 
                variant="outlined"
                onClick={() => onCreateNote()}>Create</Button>
        </Container>
    )
}

export default CreateNote;

import { NoteObject } from "../models/note";

import { Card, CardContent, Box, Typography, Button, styled } from '@mui/material';

interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px;
`

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff; 
        margin-top: 5px;
    }
`

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    
    return (
        <StyledCard style={{ backgroundColor: note.color }}>
            <CardContent>
                <Wrapper>
                    <Typography variant="h4">{note.title}</Typography>
                    <Typography variant="h6">{note.text}</Typography>
                    <Typography variant="h6">{note.date}</Typography>
                    <Button variant="outlined" onClick={() => deleteNote(note.id)}>Delete</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}

export default Note;
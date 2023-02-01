
import { NoteObject } from "../models/note";

import { Card, CardContent, Box, Typography, Button } from '@mui/material';

interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {

    return (
        <Card style={{ backgroundColor: note.color }}>
            <CardContent>
                <Box>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.text}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button onClick={() => deleteNote(note.id)}>Delete</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Note;
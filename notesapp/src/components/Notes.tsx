
import { Box, Typography } from '@mui/material';

import { NoteObject } from '../models/note';

// components
import Note from './Note';

interface INotesProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ notes, deleteNote }) => {

    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            {
                notes.map(note => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                ))
            }
        </Box>
    )
}

export default Notes;
import React from 'react';
import { getNotes } from '../../data';
import './Notes.css';
import { Link, useParams} from 'react-router-dom';

const Notes = () => {

    let notes = getNotes();

    const {noteid, title, description} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0) {
            selectedNote = notes.filter(
                note => note.id === Number(id),
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(noteid, title, description);

    const renderNotes = (notes) => (
        <ul>
            {
                notes.map((note, key) => (
                    <li key ={key}>
                        <Link to={`/notes/${note.id}`}>{note.title}</Link>
                    </li>
                ))
            }
        </ul>
    )

    return (
        <div className = "Notes">
            <h1>Notes</h1>
            {renderNotes(selectedNote || notes)}
            <h1>{noteid}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Notes;
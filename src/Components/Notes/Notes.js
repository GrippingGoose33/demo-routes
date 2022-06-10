import React from 'react';
import { getNotes } from '../../data';
import './Notes.css';
import {Link} from 'react-router-dom';

const Notes = () => {

    let notes = getNotes();

    return (
        <div className = "Notes">
            <h1>Notes</h1>
            <ul>
                {
                    notes.map((note, key) => (
                        <li key ={key}>
                            <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Notes;
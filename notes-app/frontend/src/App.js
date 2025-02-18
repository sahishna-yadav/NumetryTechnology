import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:5000/api/notes/all", {
                    headers: { Authorization: `Bearer ${token}` }, // ✅ Add "Bearer"
                })
                .then((res) => setNotes(res.data))
                .catch((err) => console.error("Error fetching notes:", err));
        }
    }, [token]);

    const addNote = () => {
        axios
            .post(
                "http://localhost:5000/api/notes/add",
                { title, description },
                { headers: { Authorization: `Bearer ${token}` } } // ✅ Add "Bearer"
            )
            .then((res) => setNotes([...notes, res.data]))
            .catch((err) => console.error("Error adding note:", err));
    };

    return (
        <div className="container">
            <h1>Notes App</h1>
            <input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addNote}>Add Note</button>

            <h2>All Notes</h2>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <div key={note._id} className="note-item">
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                    </div>
                ))
            ) : (
                <p>No notes available.</p>
            )}
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import "./MovieVote.css";

const MovieVote = ({ movieId }) => {
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        // Get initial votes from localStorage
        const savedVotes = localStorage.getItem(`votes-${movieId}`);
        if (savedVotes) {
            setVotes(parseInt(savedVotes, 10));
        }
    }, [movieId]);

    const handleVote = () => {
        const newVotes = votes + 1;
        setVotes(newVotes);
        // Save votes in localStorage
        localStorage.setItem(`votes-${movieId}`, newVotes);
    };

    return (
        <button className="movie-vote-button" onClick={handleVote}>Vote {votes}</button>
    );
};

export default MovieVote;
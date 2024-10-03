import React from 'react';
import { Link } from 'react-router-dom';
import "./CharacterCard.css";


interface CharacterCardProps{
    character:{
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    };
}

export default function CharacterCard({character}: CharacterCardProps) {
    
  return (
    <article className="character-card">
        <Link to={`/character/${character.id}`}></Link>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <h2>{character.name}</h2>
    </article>
  );
}

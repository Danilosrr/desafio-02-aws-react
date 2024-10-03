import React from 'react';  

interface CharacterCardProps {  
  name: string;  
  image: string;  
  onClick: () => void; 
}  

export default function CharacterCard({ name, image, onClick }: CharacterCardProps) {  
  return (  
    <article className="character-card" onClick={onClick}>  
      <img src={image} alt={name} />  
      <h3>{name}</h3>  
    </article>  
  );  
}
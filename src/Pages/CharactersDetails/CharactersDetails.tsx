import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
import { fetchCharacterById } from '../../Api/api';  

export default function CharacterDetails() {  
  const { id } = useParams<{ id: string }>();  
  const [character, setCharacter] = useState<any>(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {  
    (async () => {  
      try {  
        const data = await fetchCharacterById(Number(id));  
        setCharacter(data.data.results[0]);  
      } catch (err) {  
        setError("Failed to load character details");  
      } finally {  
        setLoading(false);  
      }  
    })();  
  }, [id]);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>{error}</p>;  

  return (  
    <section className="character-details">  
      <h2>{character.name}</h2>  
      <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`} alt={character.name} />  
      <p>{character.description || 'No description available.'}</p>  
    </section>  
  );  
}  
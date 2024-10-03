import React, { useEffect, useState } from 'react';  
import { fetchCharacterById } from '../../Api/api'; 
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import { useNavigate } from 'react-router-dom'; 

export default function CharacterList() {  
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);   
  const [error, setError] = useState<string | null>(null);  
  const navigate = useNavigate(); 

  const loadCharacters = async (offset: number = 0) => {  
    try {  
      const data = await fetchCharacterById(offset); 
      setCharacters(data.data.results); 
    } catch (err) {  
      setError("Failed to load characters: " + (err as Error).message);
    } finally {  
      setLoading(false); 
    }  
  };  

  useEffect(() => {  
    loadCharacters(); 
  }, []);  

  const handleCharacterClick = (id: number) => {  
    navigate(`/characters/${id}`);
  };  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (  
    <section className="character-list">  
      <h1>Character List</h1>  
      <div className="character-grid">  
        {characters.map((character) => (  
          <CharacterCard  
            key={character.id}  
            name={character.name}  
            image={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}  
            onClick={() => handleCharacterClick(character.id)} 
          />  
        ))}  
      </div>  
    </section>  
  );  
}  
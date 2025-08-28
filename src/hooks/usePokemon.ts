import { useEffect, useState } from "react";

interface IPokemon {
    id: number;
    name: string;
    imageUrl: string;
}

export const usePokemon = (id:number) => {

    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemonId = async(id:number) => {
        setIsLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data:IPokemon = await response.json();

        setPokemon({
            id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getPokemonId(id);
    }, [id])

    return {
        isLoading,
        pokemon,

        formattedId: id.toString().padStart(3, '0'), // va agregar '0' para mantener siempre 3 caracteres
    }
}
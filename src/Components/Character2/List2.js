import React, {useEffect, useState} from 'react';
import Character2 from './Character2';
import Pagination2 from './Pagination2';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function List2() {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] =useState();

    useEffect(() => {
        const url = currentPageUrl;

        async function fetchData() {
            const data = await fetch(url);
            const {results, info} = await data.json();
            setCharacter(results);
            setLoading(false);

            setNextPageUrl(info.next);
            setPrevPageUrl(info.prev);
            setPages(info.pages);
        }

        fetchData();
    }, [currentPageUrl]);

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    const goToPage = (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }

    if(loading){
        return (<div>Loading...</div>);
    }
    return (
        <div>
            <h2>Characters</h2>

            <Stack spacing={2}>
                <Pagination count={pages} 
                    onChange={nextPage}
                />
            </Stack>

            <div className="row">
                {
                    character.map((character) => (
                        <Character2
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            origin={character.origin}
                        />
                    ))
                }

            </div>
        </div>
    )
}
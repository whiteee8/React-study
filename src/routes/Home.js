import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        // const response = await fetch(
        //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
        // );
        // const json = await response.json();
        //위를 아래처럼 조금더 간단하게 쓸 수 있음
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
    };
    useEffect(() => {
        // fetch(
        //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
        // )
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setMovies(json.data.movies);
        //         setLoading(false);
        //     });
        getMovies(); // then 대신 async-await 사용
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

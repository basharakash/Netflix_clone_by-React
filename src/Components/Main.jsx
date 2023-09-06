import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request";

const main = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(requests.requestPopular).then((Response) => {
            setMovies(Response.data.results);
        });
    }, []);
    // console.log(movie);

    const tranCateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };

    return (
        <>
            <div className="w-full h-[850px] md:h-[550px] lg:h-[720px]  text-white">
                <div className="w-full h-full">
                    <div className="absolute w-full h-[850px] md:h-[550px] lg:h-[720px] bg-gradient-to-r from-black"></div>
                    <img
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                    />
                </div>

                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                            Play
                        </button>
                        <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Released: {movie?.release_date}
                    </p>
                    <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
                        {tranCateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </>
    );
};

export default main;

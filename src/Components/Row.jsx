import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Components/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchURL, RowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((Response) => {
            setMovies(Response.data.results);
        });
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById("slider" + RowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById("slider" + RowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className="bg-white left-2 rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                />
                <div
                    id={"slider" + RowID}
                    className="w-full
                 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((item, id) => (
                        <Movie item={item} key={id} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className="bg-white right-2 rounded-full absolute opacity-50  hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
                />
            </div>
        </>
    );
};

export default Row;

// w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2

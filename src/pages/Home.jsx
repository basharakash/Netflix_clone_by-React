import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Request";

const Home = () => {
    return (
        <>
            <Main />
            <Row
                RowID="1"
                title="Up Coming"
                fetchURL={requests.requestUpcoming}
            />
            <Row RowID="2" title="Popular" fetchURL={requests.requestPopular} />
            <Row
                RowID="3"
                title="Now Playing"
                fetchURL={requests.requestNowPlaying}
            />
            <Row
                RowID="4"
                title="On The Air"
                fetchURL={requests.requestOnTheAir}
            />
            <Row
                RowID="5"
                title="Top Rated"
                fetchURL={requests.requestTopRated}
            />
        </>
    );
};

export default Home;

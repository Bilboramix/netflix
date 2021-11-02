import ListMovies from "./ListMovie";

const Main = (props) => {
  return (
    <main>
      <ListMovies datas={props.datas} />
    </main>
  );
};

export default Main;

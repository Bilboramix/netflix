import ListMovies from "./ListMovie";

const Main = (pItems) => {
  return (
    <main>
      <ListMovies items={pItems.items} />
    </main>
  );
};

export default Main;

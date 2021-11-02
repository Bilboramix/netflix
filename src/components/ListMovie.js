const ListMovies = (props) => {
  let movie;
  const categories = props.datas.map((elem, index) => {
    movie = props.datas[index].images.map((elem, index) => {
      console.log(elem);
      return <img src={elem} />;
    });
    return (
      <section>
        <h1>{elem.category}</h1>
        {movie}
      </section>
    );
  });

  return <div>{categories}</div>;
};

export default ListMovies;

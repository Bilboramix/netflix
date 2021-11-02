const ListMovies = (props) => {
  let movie;
  const categories = props.datas.map((elem, index) => {
    movie = props.datas[index].images.map((elem, index) => {
      console.log(elem);
      return <div>{elem}</div>;
    });
    return (
      <section>
        <h1>{elem.category}</h1>
        <img src={movie} />
      </section>
    );
  });

  return <div>{categories}</div>;
};

export default ListMovies;

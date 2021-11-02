const ListMovies = ({ items }) => {
  /*   let movies;
  const categories = props.datas.map((elem, index) => {
    movies = props.datas[index].images.map((elem, index) => {
      console.log(elem);
      return <img src={elem} />;
    });
    return (
      <section>
        <h1>{elem.category}</h1>
        {movies}
      </section>
    );
  }); */
  /*   const myDoubleMap = items.map((item, index) => {
    return (
      <div>
        <h1>{item.category}</h1>
        {item.images.map((url, index) => {
          return <img src={url} />;
        })}
      </div>
    );
  });
  return <section>{myDoubleMap}</section>;
}; */

  /*   return <div>{categories}</div>;
}; */
  console.log(items[0].category);
  return (
    <section>
      {items.map((item, index) => {
        return (
          <>
            <h1>{item.category}</h1>
            <div className="carousel">
              {item.images.map((image, index) => {
                return <img src={image} />;
              })}
            </div>
          </>
        );
      })}
    </section>
  );
};

export default ListMovies;

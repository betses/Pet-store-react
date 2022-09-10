const DisplayPet = (props) => {
  const { name, animal, breed, images, location } = props;
  let hero = "https://i.redd.it/b3esnz5ra34y.jpg";
  console.log(props);

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card_image">
          <img src={hero} alt="dog" />
        </div>
        <div className="title-wrapper">
          <div className="card_title title-white">
            <p>{name}</p>
            <p>Type: {animal}</p>
            <p>Breed: {breed} </p>
            <p>Location: {images} </p>
            <p>Location: {location} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPet;

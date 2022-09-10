import DisplayPet from "./DisplayPet";

const Pet = (props) => {
  const { name, animal, breed, images, location } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  function handlePopup() {
    document.querySelector(".display-modal").style.display = "block";
  }

  return (
    <div>
      <div className="display-modal">
        <DisplayPet pets={props} />
      </div>
      <button onClick={handlePopup} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </button>
    </div>
  );
};

export default Pet;

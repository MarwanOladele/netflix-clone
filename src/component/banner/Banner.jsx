import "./Banner.css";

const Banner = () => {
  const truncate = (sting, n) => {
    return sting?.length > n ? `${sting.substring(0, n)}...` : sting;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/8485310.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description",
            150
          )}
        </h1>
      </div>

      <div className="banner--fadebutton" />
    </header>
  );
};

export default Banner;

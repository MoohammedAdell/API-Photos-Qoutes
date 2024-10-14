import { useEffect, useState } from "react";
import Container from "./component/Container";
import Header from "./component/Header";
import PhotosList from "./component/PhotosList";
import axios from "axios";
import { Ellipsis } from "react-spinners-css";
import Model from "./component/Model";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const [qoute, setQoute] = useState({});

  const handelPhotoClick = () => {
    axios
      .get("http://api.quotable.io/random")
      .then((res) => {
        // console.log(res.data);
        setQoute(res.data);
        setShowModel((s) => !s);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=10").then((res) => {
      setPhotos(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Container>
        <Header />
        {loading && <Ellipsis color="#e5e7eb" size={100} />}
        {!loading && (
          <PhotosList handelPhotoClick={handelPhotoClick} photos={photos} />
        )}
        <Model show={showModel} qoute={qoute} close={() =>  setShowModel(false)} />
      </Container>
    </>
  );
}

export default App;

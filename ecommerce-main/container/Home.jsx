import { useEffect } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { useSetRecoilState } from "recoil";
import { userDetailsState } from "../recoil/storeUserDetails";
//import UploadImage from "../components/UploadImage";

const Home = () => {
  const setUserDetails = useSetRecoilState(userDetailsState);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userDetails"));
    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(null);
    }
  }, []);

  return (
    <div>
      <Carousel />
      <div className="container-fluid text-center">
        <div className="row">
          <Card normalProp={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

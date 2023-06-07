import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../../assets/football.png";
import Slider2 from "../../../assets/badminton.png";
import Slider3 from "../../../assets/basketball.png";
import Slider4 from "../../../assets/chess.png";
import Slider5 from "../../../assets/cricket.png";
import Slider6 from "../../../assets/tableTennis.png";
import Container from "../../../components/Shared/Container/Container";

const sliders = [
  { img: Slider1, id: "01" },
  { img: Slider2, id: "02" },
  { img: Slider3, id: "03" },
  { img: Slider4, id: "04" },
  { img: Slider5, id: "05" },
  { img: Slider6, id: "06" },
];
const Banner = () => {
  return (
    <Container>
      <Carousel>
        {sliders.map((slider) => (
          <div key={slider.id}>
            <img className="rounded-lg" src={slider.img} alt="slider" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;

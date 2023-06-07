import React from "react";
import Container from "../../components/Shared/Container/Container";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    image:
      "https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LCdF02lToX5Amj0RDsVrvzm8mEFDKyrnKg",
  },
  {
    id: 3,
    name: "Walter white",
    email: "walter@white.com",
    image:
      "https://cdna.artstation.com/p/assets/covers/images/014/997/356/large/abdelrahman-kubisi-front-hat-injured.jpg?1546637209",
  },
  {
    id: 4,
    name: "Sergio",
    email: "sergiog@gmail.com",
    image:
      "https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg",
  },
  {
    id: 5,
    name: "John snow",
    email: "john@snow.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAg4RCl4Wv6wRQ9iV9pSbifRO_Ij8BE-lkw",
  },
  {
    id: 6,
    name: "Berlin",
    email: "berlin@gmail.com",
    image:
      "https://img.mensxp.com/media/content/2021/Sep/Money-Heists-Berlin-Talks-About-The-Finale1200_612f90221b88c.jpeg",
  },
  {
    id: 7,
    name: "Rio",
    email: "rio@gmail.com",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/miguel-herran-attends-hasta-el-cielo-photocall-at-only-you-news-photo-1619164478.?crop=1.00xw:1.00xh;0,0&resize=640:*",
  },
  {
    id: 8,
    name: "Will smith",
    email: "Smith@gmail.com",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/221128-will-smith-jm-1246-33944b.jpg",
  },
  {
    id: 9,
    name: "Williams",
    email: "williams@gmail.com",
    image:
      "https://www.campleaders.com/system/forest_page/images/files/000/001/103/cropped_large/DSC03826-X2.jpg?1562340889",
  },
];

const Instructors = () => {
  return (
    <Container>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="rounded-full w-32 h-32 object-cover"
              />
              <h2 className="text-lg font-semibold mt-4">{instructor.name}</h2>
              <p className="text-gray-600">{instructor.email}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Instructors;

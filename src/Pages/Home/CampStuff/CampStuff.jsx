import React from "react";
import Container from "../../../components/Shared/Container/Container";
import { Zoom } from "react-awesome-reveal";

const CampStaff = () => {
  const staffMembers = [
    {
      name: "Sarah Johnson - Head Coach",
      bio: "With over 10 years of coaching experience, Sarah is dedicated to helping young athletes develop their skills and reach their full potential. Her expertise lies in fostering a positive team culture and instilling a love for the game. Sarah holds a Master's degree in Sports Coaching and has led teams to numerous championships.",
      photo: "https://music.wustl.edu/files/music/People/Sarah%20Johnson.jpeg",
    },
    {
      name: "Michael Rodriguez - Assistant Coach (Basketball)",
      bio: " Michael's passion for basketball is contagious. As a former professional player, he brings a wealth of knowledge and skill development techniques to our camp. With a focus on teamwork and individual player growth, Michael aims to inspire young athletes to strive for excellence on and off the court.",
      photo: "https://www.allenovery.com/global/-/media/allenovery/people/r/rodriguez_michael-3037629_web.jpg?rev=53cc6ba0fef648d79214d96517909490&h=854&w=1366&la=en-GB&hash=31064B0EA42C1D43C176BF630F16EA12",
    },
    {
      name: "Emily Thompson - Assistant Coach (Soccer)",
      bio: "Emily is a highly accomplished soccer player with a genuine enthusiasm for teaching the beautiful game. Her experience playing at the collegiate level and representing her country in international tournaments provides a solid foundation for her coaching approach. Emily believes in creating a positive and inclusive environment where players can thrive.",
      photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/pacificu.sidearmsports.com/images/2021/8/19/Wiltshire.jpg",
    },
    {
      name: "David Lee - Assistant Coach (Swimming)",
      bio: "David's passion for swimming began at a young age and has propelled him to become a successful coach. He has coached swimmers at various levels, from beginners to national qualifiers. David focuses on technique refinement and mental preparation, instilling confidence in his swimmers to reach new heights in the pool.",
      photo: "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2017/11/GettyImages-4773841861.jpg",
    },
    {
      name: "Jessica Chen - Camp Counselor",
      bio: "Jessica's warm and friendly nature makes her an excellent camp counselor. With a background in child development and a love for outdoor activities, she creates engaging and fun experiences for campers. Jessica's ability to connect with children and foster a sense of belonging ensures that each camper feels supported and valued.",
      photo: "https://tsl.mit.edu/wp-content/uploads/brizy/imgs/Jessica-Chen-375x561x0x0x375x343x1681153489.jpg",
    },
    {
      name: "Alex Ramirez - Support Staff (First Aid and Safety)",
      bio: "Alex's top priority is the well-being and safety of all campers. With extensive training in first aid and emergency response, Alex ensures that camp activities are conducted in a secure and supervised environment. Their attention to detail and calm demeanor make them a valuable asset in handling any unforeseen situations.",
      photo: "https://yt3.googleusercontent.com/kd7rhwg0XgbSkGidqnBmZQmWwEu924TEogYoI1fyluawdDb4zp_JWauhhywajo42khWHIyJ6=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <Container>
      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet Our Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffMembers.map((staff, index) => (
              <Zoom delay={2}>
                <div key={index} className="bg-white p-8 rounded-lg shadow">
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="w-full h-56 object-contain mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
                  <p className="text-gray-700">{staff.bio}</p>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CampStaff;

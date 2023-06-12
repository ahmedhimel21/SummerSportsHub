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
  ];

  return (
    <Container>
      <section className="bg-gray-100 py-12 mt-8 rounded-lg">
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

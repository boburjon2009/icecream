import { Facebook, Instagram, Youtube } from "lucide-react";


const teamMembers = [
  {
    id: 1,
    name: "Marvin Joner",
    role: "Bakery Worker",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    name: "Patricia Woodrum",
    role: "Staff Worker",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 3,
    name: "Hannaz Stone",
    role: "Shop Worker",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 4,
    name: "Elina James",
    role: "Bakery Worker",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 5,
    name: "Kevin Andrew",
    role: "Staff Worker",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 6,
    name: "Lauren Trout",
    role: "Shop Worker",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
];

export default function Ourteam() {
    return (
        <div>
            <section className="w-full flex flex-col items-center justify-center py-50 bg-gradient-to-r from-pink-100 via-white to-blue-100">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
                    Our Team
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
                    <span className="text-pink-500 font-medium">Home</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">team</span>
                </div>
            </section>
         <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">
        Our <span className="text-pink-500">Team</span> Members
      </h2>
      <p className="text-gray-500 mb-12">
        Get to know the friendly faces behind your favorite flavors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex justify-center gap-3 mt-3">
              <a
                href={member.socials.facebook}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600"
              >
                <Facebook />
              </a>
              <a
                href={member.socials.instagram}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600"
              >
                <Instagram />
              </a>
              <a
                href={member.socials.youtube}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600"
              >
                <Youtube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    )
}
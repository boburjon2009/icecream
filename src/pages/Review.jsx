import { useState } from "react";
import { Quote, Star } from "lucide-react";

// Card Component
export function Card({ children, className }) {
  return (
    
    <div
      className={`rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6 ${className}`}
    >
        
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

// Testimonial Data (9 ta misol uchun)
const testimonials = [
  { name: "Kevin Andrew", title: "Happy Client", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Quisquam est qui dolorem ipsum quia dolor sit amet..." },
  { name: "Peri James", title: "Happy Client", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Ruisuam est qui dolorem ipsum quia dolor sit amet..." },
  { name: "Naurth Reough", title: "Happy Client", image: "https://randomuser.me/api/portraits/men/65.jpg", text: "Nuisuam est qui dolorem ipsum quia dolor sit amet..." },
  { name: "Lina Carter", title: "Happy Client", image: "https://randomuser.me/api/portraits/women/12.jpg", text: "Dolorem ipsum quia dolor sit amet consectetur adipisci..." },
  { name: "Mark Wilson", title: "Happy Client", image: "https://randomuser.me/api/portraits/men/18.jpg", text: "Consectetur adipisci velit sed non numquam eius modi..." },
  { name: "Sara Smith", title: "Happy Client", image: "https://randomuser.me/api/portraits/women/25.jpg", text: "Numquam eius modi tempora incidunt ut labore sint..." },
  { name: "David Lee", title: "Happy Client", image: "https://randomuser.me/api/portraits/men/50.jpg", text: "Velit sed quia non numquam eius modi tempora incidunt..." },
  { name: "Emily Brown", title: "Happy Client", image: "https://randomuser.me/api/portraits/women/60.jpg", text: "Est qui dolorem ipsum quia dolor sit amet consectetur..." },
  { name: "Chris Johnson", title: "Happy Client", image: "https://randomuser.me/api/portraits/men/75.jpg", text: "Labore et dolore magnam aliquam quaerat voluptatem..." },
];

export default function Review() {
    
  const [activeIndex, setActiveIndex] = useState(0);

  // nechta sahifa borligini aniqlaymiz
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // faqat active sahifadagi 3 ta itemni chiqaramiz
  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage,
    activeIndex * itemsPerPage + itemsPerPage
  );

  return (
    
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
                    <section className="w-full flex flex-col items-center justify-center py-50 bg-gradient-to-r from-pink-100 via-white to-blue-100">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
                 review
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
                    <span className="text-pink-500 font-medium">Home</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">review</span>
                </div>
            </section>
        <h2 className="text-4xl font-bold text-gray-900">
          Hear From Our <span className="text-pink-500">Gelato</span> Enthusiasts
        </h2>
        <p className="text-gray-500 mt-4">
          Read testimonials from those who have enjoyed our artisan gelato.
        </p>
      </div>

      {/* 3 ta card qator bo‘lib chiqadi */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {visibleTestimonials.map((item, index) => (
          <Card key={index} className="w-80">
            <CardContent>
                <h1 className="text-3xl font-light">66</h1>
              <p className="text-gray-600 text-sm">{item.text}</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-pink-500 font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === i ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

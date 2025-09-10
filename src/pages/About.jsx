export default function AboutHeader() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
        About Us
      </h1>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
        <span className="text-pink-500 font-medium">Home</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">About Us</span>
      </div>
    </section>
  );
}

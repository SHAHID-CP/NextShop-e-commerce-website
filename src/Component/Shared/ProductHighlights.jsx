import dbConnect, { collectionNames } from "@/Lib/dbConnect";

export default async function ProductHighlights() {
  // Connect to MongoDB
  const productCollection = await dbConnect(collectionNames.productCollection);

  // Fetch max 6 products in descending order of name
  const products = await productCollection
    .find({})
    .sort({ name: -1 })
    .limit(6)
    .toArray();

  if (!products.length) {
    return <p className="text-center mt-10">No products available</p>;
  }

  return (
    <section className="max-w-7xl mx-auto mt-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-[#ff6900] to-orange-400 bg-clip-text text-transparent">
            Product Highlights
          </span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover our top trending products, handpicked just for you. 
          Shop the latest arrivals and enjoy premium quality at the best prices.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col space-y-2 bg-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>
              <p className="font-bold text-[#ff6900] text-lg mt-auto">
                ${product.price}
              </p>
            </div>
            {/* Subtle overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

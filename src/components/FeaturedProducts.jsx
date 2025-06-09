import React from "react";

const CategoryHighlights = () => {
  const categoryHighlights = [
    {
      title: "Casual Shirts",
      label: "Top Deals",
      image:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/5/d/y/xxl-frml-st2-vebnor-original-imah89h9ysyg2jth.jpeg?q=60",
    },
    {
      title: "Backpacks",
      label: "Min. 70% Off",
      image:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/rucksack/l/d/q/80-litres-curve-water-resistant-rucksack-for-hiking-trekking-and-original-imah8kx4w6fatpqg.jpeg?q=60",
    },
    {
      title: "Wall Clocks",
      label: "Min. 50% Off",
      image:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/wall-clock/r/o/b/handpainted-peacock-wall-clock-32-5-wc-331-analog-divinecrafts-original-imahbzdadxeahpj5.jpeg?q=60",
    },
    {
      title: "Mosquito Nets",
      label: "Min. 50% Off",
      image:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mosquito-net/c/g/x/king-size-bed-polyester-double-bed-with-saviours-suitable-for-6-original-imahckr75wyz9zdf.jpeg?q=60",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Hot Deals on Fashion
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoryHighlights.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <div className="overflow-hidden rounded-t-xl flex justify-center items-center h-48 p-4 bg-gray-50">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-base md:text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-green-600 text-sm font-medium mt-1">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlights;

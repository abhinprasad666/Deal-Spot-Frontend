import { useSelector } from "react-redux";

const CategoryHighlights = () => {
    const { categories, loading } = useSelector((state) => state.categories);
    const maxCategoryHighlights = 4;
    const categoryHighlights = categories;

    return (
        <div>
            {!loading && categories && (
                <section className="max-w-7xl mx-auto px-4 py-10">
                    {/* Heading & Description */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-300">
                            Explore Popular Categories
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            Find top trending collections handpicked just for you.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                        {categoryHighlights.slice(0, maxCategoryHighlights).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:scale-[1.03] cursor-pointer overflow-hidden"
                            >
                                <div className="flex justify-center items-center h-44 bg-gray-50 p-3 dark:bg-gray-800">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 text-center dark:bg-gray-500">
                                    <h3 className="font-semibold text-base md:text-lg text-gray-800  dark:text-gray-200">{item.name}</h3>
                                    {item.labal && (
                                        <p className="text-green-600 text-sm font-medium mt-1 dark:text-green-500">{item.labal}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default CategoryHighlights;

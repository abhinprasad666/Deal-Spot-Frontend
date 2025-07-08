import { useSelector } from "react-redux";

import Loader from "../../common/Loader";

const CategoryHighlights = () => {
    const { categories, loading } = useSelector((state) => state.categories);

    const maxCategoryHighlights = 4;

    const categoryHighlights = categories;

    return (
        <div>
            {!loading && categories &&(
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Hot Deals on Fashion</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categoryHighlights.map((item, index) => {
                            if (index < maxCategoryHighlights) {
                                return (
                                    <div
                                        key={index}
                                        className="bg-white border  dark:bg-blue-200 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] cursor-pointer"
                                    >
                                        <div className="overflow-hidden rounded-t-xl flex justify-center items-center h-48 p-4 bg-gray-50 dark:bg-gray-400">
                                            <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h3 className="font-semibold text-base md:text-lg text-gray-800">
                                                {item.name}
                                            </h3>
                                            <p className="text-green-600 text-sm font-medium mt-1">{item.labal}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export default CategoryHighlights;

import AllProducts from "../../components/home/allProducts/AllProducts";
import CategoryHighlights from "../../components/home/categories/CategoryHighlights";
import CategoryScroll from "../../components/home/categories/CategoryScroll";
import Slider from "../../components/home/slider/Slider";


const Home = () => {
    return (
        <div>
            <CategoryScroll />
            <Slider />
            <CategoryHighlights />
            <AllProducts />
            
          
        </div>
    );
};

export default Home;

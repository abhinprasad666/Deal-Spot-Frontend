import CategoryHighlights from "../../../components/userComponents/home/categories/CategoryHighlights";
import CategoryScroll from "../../../components/userComponents/home/categories/CategoryScroll";
import Slider from "../../../components/userComponents/home/slider/Slider";
import AllProducts from "../../../components/userComponents/home/allProducts/AllProducts";


const Home = () => {
    return (
        <div>
            <CategoryScroll />
             <AllProducts />
            <Slider />
            <CategoryHighlights />
           
            
          
        </div>
    );
};

export default Home;

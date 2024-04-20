import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
const Category = () => {
    return ( 
        <div className="shop-by-Category">
         <div className="Categories">
              <div className="Category">
                 <img src={cat1} alt="" />
               </div>
               <div className="Category">
                 <img src={cat1} alt="" />
               </div>
               <div className="Category">
                 <img src={cat1} alt="" />
               </div>
               <div className="Category">
                 <img src={cat1} alt="" />
               </div>
            
             </div>
             </div>
     );
};

export default Category;

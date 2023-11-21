import './HomeScreen.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Components
import Product from '../components/Product';

// Actions
import {getProducts as listProducts} from '../redux/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const {products, loading, error} = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <>
      <div className="homescreen">
        <div className="homescreen__banner">
          <img src={require('../components/assets/Website Photos/homepage-banner.jpg')} alt="Homepage Banner" />
          <div className="homescreen__content">
            <h1>Made for every shade.</h1>
            <button className="shopnow">Shop Now</button>
          </div>
        </div>
        <div className="homescreen__products">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (<Product 
        key={product._id} 
        productId ={product._id}
        name={product.name}
        price={product.price}
        imageUrl={product.imageUrl}
        />))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen
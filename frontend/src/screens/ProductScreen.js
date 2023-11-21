import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://drive.google.com/uc?id=1Ihj5LFt_3TWnTISkaHgTIrYu6EAxTR8c" alt="product name" />
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <h2 className="right__name">Product 1</h2>
          <p className="right__price">
            Price: <span>₱399</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
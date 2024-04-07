import './card.css';
import Button from '../button/button';
import { useState } from 'react';

const Card = (props) => {
  const [count, setCount] = useState(0);
  const {course, onAddItem, onRemoveItem} = props;


  const handleIncrement = () => {
    setCount(prev => prev + 1);
    onAddItem(course);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    onRemoveItem(course);

  };
  return (
      <div className="card">
        <span className={
          `${
            count != 0 ? 'card_badge': 'card_badge-hidden'
          }`
        }>
          {count}
        </span>

        <div className="image__container">
          <img 
            src={course.Image} 
            alt={course.title} 
            width={'100%'} 
            height={'230px'}/>
        </div>

        <div className="card__body">
          <h2 className="card__title">
            {course.title}
          </h2>
          <div className="card__price">
            {course.price.toLocaleString("en-US", {
              style: "currency",
              currency: "EUR"
            })}
          </div>
        </div>

        <div className="hr"></div>

        <div className="btn__container">
          <Button title={"+"} type={"add"} onClick={handleIncrement}/>
          {count !== 0 && (
            <Button title={"-"} type={"remove"} onClick={handleDecrement}/>
          )}
        </div>
      </div>
    )
}

export default Card
import React from "react";
import PropTypes from "prop-types";


const foodILike = [{id:1, name: "kimchi", image: "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_1280.jpg", rating: 4.9},
 {id:2,name: "ramen", image: "https://cdn.pixabay.com/photo/2019/11/23/15/26/ramen-4647408_1280.jpg", rating: 5.1}, 
 {id:3,name: "samgiopsal", image: "https://cdn.pixabay.com/photo/2017/04/19/19/41/samgyupsal-2243385_1280.jpg", rating: 4.}, 
 {id:4,name: "chukumi", image: "https://cdn.pixabay.com/photo/2013/07/12/18/39/squid-153661_1280.png", rating: 3.8}
]

function Food({name, picture, rating}) {
  return (<div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name}/>
    </div>)
}

Food.propTypes = { // 부모로부터 올바른 props를 받는지 확인하기 위한 모듈
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      })}
    </div>
  );
}

export default App;

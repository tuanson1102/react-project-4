// import { useState } from "react";

import "./App.css";
import ProductCard from "./component/ProductCard";
import ProductCard2 from "./component/ProductCard2";
import ProductList from "./component/ProductList";
const products: Product[] = [
  {
    title: "Essence Mascara Lash Princess",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    rating: {
      count: 3,
      rate: 4.94,
    },
    variants: [
      {
        price: 9.99,
        compare_at_price: 12.99,
      },
    ],
  },
  {
    title: "Eyeshadow Palette with Mirror",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    rating: {
      count: 10,
      rate: 3.28,
    },
    variants: [
      {
        price: 19.99,
        compare_at_price: 29.99,
      },
      {
        price: 24.99,
        compare_at_price: 34.99,
      },
    ],
  },
  {
    title: "Powder Canister",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    variants: [
      {
        price: 16.99,
      },
    ],
  },
];
const products2: Product2[] = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_1280.jpg",
    title: "Mother had always taught him",
    body: "Him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    reactions: {
      likes: 200,
      dislikes: 25,
    },
    views: 195,
    userId: 1221,
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=",
    title: "He was an expert but not in a discipline",
    body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    reactions: {
      likes: 1259,
      dislikes: 2,
    },
    views: 5584,
    userId: 91,
  },
  {
    id: 3,
    image:
      "https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg",
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed.",
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  },
  {
    id: 4,
    image:
      "https://www.timeforkids.com/wp-content/uploads/2023/11/G3G5_231117_bear_steps.jpg?w=1024",
    title: "All he wanted was a candy bar.",
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    reactions: {
      likes: 3519,
      dislikes: 1238,
    },
    views: 12421,
    userId: 4712,
  },
  {
    id: 5,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/701/963/small_2x/wild-leopard-animal-illustration-ai-generative-free-photo.jpg",
    title: "Hopes and dreams were dashed that day.",
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    reactions: {
      likes: 1239,
      dislikes: 303,
    },
    views: 723,
    userId: 134,
  },
  {
    id: 6,
    image:
      "https://d1jyxxz9imt9yb.cloudfront.net/animal/112/meta_image/regular/WR202206_GiraffeTranslocation_012_360559_reduced.jpg",
    title: "Dave wasn't exactly sure how he had ended up",
    body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    reactions: {
      likes: 50,
      dislikes: 17,
    },
    views: 38,
    userId: 98,
  },
  {
    id: 7,
    image: "https://www.stockvault.net/data/2007/03/01/100489/thumb16.jpg",
    title: "This is important to remember.",
    body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    reactions: {
      likes: 1227,
      dislikes: 246,
    },
    views: 1618,
    userId: 70,
  },
  {
    id: 8,
    image:
      "https://rspca.sfo2.cdn.digitaloceanspaces.com/public/Uploads/pig-animal-welfare-science__FocusFillWzYwNywzNjMsInkiLDEyMl0.jpg",
    title: "One can cook on and with an open fire.",
    body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
    reactions: {
      likes: 1221,
      dislikes: 336,
    },
    views: 21416,
    userId: 67,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/highly-detailed-view-fox-its-natural-environment_23-2151570814.jpg",
    title: "There are different types of secrets.",
    body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    reactions: {
      likes: 703,
      dislikes: 18,
    },
    views: 2235,
    userId: 82,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1552071379-041b32707fed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3Dß",
    title: "They rushed out the door.",
    body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
    reactions: {
      likes: 455,
      dislikes: 3,
    },
    views: 4504,
    userId: 144,
  },
];

function App() {
  return (
    <section className="feature-products">
      <div className="container">
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </ProductList>
        <ProductList>
          {products2.map((product2) => (
            <ProductCard2 key={product2.id} product2={product2} />
          ))}
        </ProductList>
      </div>
    </section>
  );
}

export default App;

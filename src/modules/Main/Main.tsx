import Hero from "./Hero/Hero";
import "./main.css";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    const firstLayer = document.querySelector(".first-layer");
    const secondLayer = document.querySelector(".second-layer");
    const thirdLayer = document.querySelector(".third-layer");
    const fourthLayer = document.querySelector(".fourth-layer");

    const Paralax = () => {
      const scrolled = window.pageYOffset;
 
      if(firstLayer){
        firstLayer.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
      if(secondLayer){
        secondLayer.style.transform = `translateY(${scrolled * 0.25}px)`;
      }
      if(thirdLayer){
        thirdLayer.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
      if(fourthLayer){
        fourthLayer.style.transform = `translateY(${scrolled * 0.35}px)`;
      }

    };
    window.addEventListener("scroll", Paralax);
    Paralax();
    return () => {
      window.removeEventListener('scroll', Paralax);
    };
  },[]);

  return (
    <>
      <div className="paralax">
        <h1 className="paralax__text-layer">This is my main project</h1>
        <p className="paralax__text__subtitle">Future WEB development in my hand</p>
        <img
          src="../../../public/photos/FirstLayer.png"
          className="first-layer"
        ></img>
        <img
          src="../../../public/photos/SecondLayer.png"
          className="second-layer"
        ></img>
        <img
          src="../../../public/photos/3.png"
          className="third-layer"
        ></img>
        <img
          src="../../../public/photos/4.png"
          className="fourth-layer"
        ></img>
      </div>
      <Hero />
    </>
  );
}
export default Main;

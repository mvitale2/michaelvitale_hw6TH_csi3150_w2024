import "./App.css";
import Hero from "./Components/Hero/Hero.js";
import TravelBlog from "./Components/TravelBlog/TravelBlog.js";
import data from "./TravelData.js";

function App() {
  const blogs = data.map((item) => {
    return(
      // the props here need to be the same name as those in TravelBlog.js
      <TravelBlog
        key={item.id}
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <section className="blogList">{blogs}</section>
    </div>
  );
}

export default App;

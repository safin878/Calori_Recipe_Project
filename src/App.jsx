import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipe from "./components/OurRecipe";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <RecipeContainer></RecipeContainer>
    </>
  );
}

export default App;

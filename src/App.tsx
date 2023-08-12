import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile devices
        lg: `"nav nav" "aside main"`, //for screens larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/*items inside this will be rendered for devices with screen sizes lg and above. */}
        <GridItem area="aside" bg="black">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" bg="black">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

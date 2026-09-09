import { Suspense, useState } from "react";
import "./App.css";
import Player from "./components/Players/player";
import type { PlayerType } from "./types/type";
import Navbar from "./components/nav";
import Hero from "./components/hero";

const playersFetch = async (): Promise<PlayerType[]> => {
  const res = await fetch("/playerData.json");
  const data = await res.json();
  return data;
};

const playersPromise = playersFetch();

function App() {
  const [balance, setBalance] = useState<number>(1000000);
  const [purchasedPlayers, setPurchasedPlayers] =
  useState<PlayerType[]>([]);

  return (
    <>
      <Navbar balance={balance} />
      <Hero balance={balance} setBalance={setBalance}/>

      <Suspense fallback={<h2>Loading.......</h2>}>
        <Player
          playersPromise={playersPromise}
          balance={balance}
          setBalance={setBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        />
      </Suspense>
    </>
  );
}

export default App;
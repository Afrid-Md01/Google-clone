import React from "react";
import HomeHeader from "./Header/HomeHeader";
import HomeBody from "./Body/HomeBody";
import HomeFooter from "./Footer/HomeFooter";

function Home() {
  return (
    <div className="flex flex-col h-[100vh] dark:bg-slate-900">
      <HomeHeader/>
      <main className="grow flex justify-center">
        <HomeBody />
      </main>
      <footer>
        <HomeFooter />
      </footer>
    </div>
  );
}

export default Home;

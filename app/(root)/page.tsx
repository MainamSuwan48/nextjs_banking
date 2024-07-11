import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Cornman" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="Access your account information and manage your finances effortlessly."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={9999.99}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;

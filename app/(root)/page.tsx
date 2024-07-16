import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Cornman",
    lastName: "Cornboy",
    email: "z4asda@casd.com",
  };
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
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 5555 }, { currentBalance: 5555 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Home;

import React from "react";

const KYC = () => {
  return (
    <>
      <section className="h-screen">
        <div>
          <div>
            <h1 className="font-abc text-4xl font-bold py-6">Rocket Launchpad KYC</h1>
            <p className="font-abc text-[17px] py-2">
              As you know, at PinkSale we take the safety of our investors very
              seriously. We hate scams and rugpulls and, because of that, we
              have built many features and tools for you to be able to make
              informed decisions as to whether a presale is worth investing in
              or not.
            </p>
            <p className="font-abc text-[17px] py-2">
              Scrolling through the list of current and past presales, you might
              have noticed that several projects have a KYC badge next to their
              names. This brief article is designed to explain what that means
              and what it entails for all stakeholders.
            </p>

            <div>
              <h2 className="text-3xl font-semibold font-abc py-2">KYC Explained</h2>
              <p className="font-abc text-[17px] py-2">
                At PinkSale, Know Your Customer, or KYC is the process of
                identity verification to ascertain that the person speaking to
                us is really who she/he says they are. How does it work? The
                identities of the project owner is determined by submitting ID
                documentation (Passport, National ID) to an automated platform.
                This is similar to the KYC process needed when opening up a
                trading account on a major exchange like Binance, for example.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KYC;

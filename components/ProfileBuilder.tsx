import React from "react";
import Designer from "./Designer";

function ProfileBuilder() {
  return (
    <main className="w-full flex flex-col">
      <div className="flex w-full flex-grow bg-accent bg-[url(/texture.svg)]">
        <Designer />
      </div>
    </main>
  );
}

export default ProfileBuilder;

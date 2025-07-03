"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signal, useSignal } from "@preact/signals-react";
import { useState } from "react";

export default function TestUsestate() {
  //   const [inputName, setInputName] = useState("");
  //   const [name, setName] = useState("");

  const inputVal = useSignal("");
  const nameVal = useSignal("");

  const name = useSignal("");
  return (
    <div className="flex">
      {/* <div className="flex flex-col w-full max-w-sm items-center gap-2">
        <Input type="text" placeholder="Name" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <Button
          type="submit"
          variant="outline"
          onClick={() => {
            setName(inputName);
          }}
        >
          Set Name
        </Button>
        <Greeting name={name} />
      </div> */}

      <div className="flex flex-col w-full max-w-sm items-center gap-2">
        <Input type="text" placeholder="Name" value={inputVal.value} onInput={(e) => (inputVal.value = e.currentTarget.value)} />
        <Button
          type="submit"
          variant="outline"
          onClick={() => {
            nameVal.value = inputVal.value;
          }}
        >
          Set
        </Button>
        <Greeting name={nameVal.value} />
      </div>
    </div>
  );
}

function Greeting({ name }: { name: string }) {
  return <h1 className="text-2xl"> {name ? `Hello, ${name}!` : "Are you there?"}</h1>;
}

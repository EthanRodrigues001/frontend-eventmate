"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  const passkey = searchParams.get("passkey");
  const adminPasskey = process.env.ADMIN;

  console.log("Server-side admin passkey:", process.env.ADMIN);
  // console.log("Client-side admin passkey:", adminPasskey);

  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (passkey === adminPasskey) {
      setisAdmin(true);
      console.log("yes");
    }
  }, []);

  if (isAdmin) {
    return <div>Search: {passkey}</div>;
  } else {
    return <div>nope</div>;
  }
}

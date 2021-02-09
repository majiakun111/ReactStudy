import React, { useContext } from 'react';

import { UserContext, TokenContext } from "./Constants";

export default function ContextHook() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  console.log(user, token);

  return (
    <div>
      <h2>ContextHook</h2>
    </div>
  )
}
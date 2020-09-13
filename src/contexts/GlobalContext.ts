import React from "react";

import { IGlobalState } from "../helpers/interfaces";

const GlobalContext = React.createContext<IGlobalState | null>(null);

export default GlobalContext;
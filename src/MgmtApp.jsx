import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export function MgmtApp() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

import { Outlet } from "react-router-dom";
import classes from "./App.module.css";

export default function App() {
  return(
    <div className={classes.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}  



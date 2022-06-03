import "./App.css";
import React from "react";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";
import StatsTable from "./components/StatsTable/StatsTable";
import { MainAPI } from "./api/api";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

const App = (props) => {
  return (
    <Provider store={store}>
      <div className={"wrapper"}>
        <Header />
        <MainContent />
        <StatsTable />
      </div>
    </Provider>
  );
};

export default App;

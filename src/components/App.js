import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";
import { Route, Routes } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";

function App(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await props.dispatch(handleInitialData());

      setLoading(false);
    };

    fetchData();
  });
  return (
    <>
      <Nav />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/question/:id" exact element={<QuestionPage />} />
          <Route path="/add" exact element={<NewQuestion />} />
          <Route path="/404" exact element={<NotFound />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
        </Routes>
      )}
    </>
  );
}

export default connect()(App);

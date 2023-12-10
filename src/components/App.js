import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";

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
    <div className="App">{loading ? <p>Loading...</p> : <Dashboard />}</div>
  );
}

export default connect()(App);

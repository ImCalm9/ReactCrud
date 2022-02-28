import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Screens/AboutPage";
import AbouticonLink from "./Components/shared/AbouticonLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AbouticonLink />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;

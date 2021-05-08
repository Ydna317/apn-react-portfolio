import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import ScrollToTop from "./components/ScrollToTop";
import MobileNav from "./components/MobileNav";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
      <MobileNav />
    </Router>
  );
}

export default App;

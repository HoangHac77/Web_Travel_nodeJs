import HomePage from "./pages/home/index"

function App() {
  return (
<<<<<<< HEAD

=======
    
>>>>>>> dddfdc42 (XDWATDL-10 XDWATDL-22 page user)
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePages.MasterLayout />}>
          <Route path="" element={<HomePages.Home />} />
          <Route path="contact" element={<HomePages.Contact />} />
          <Route path="about" element={<HomePages.About />} />
          <Route path="tours" element={<HomePages.Tours />} />
          <Route path="tours/details/:id" element={<HomePages.DetailTour />} />
        </Route>
        <Route path="/login" exact element={<AuthPage.Login />} />
        <Route path="/signup" exact element={<AuthPage.Register />} />
      </Routes>
    </Router>

  );
}

export default App;

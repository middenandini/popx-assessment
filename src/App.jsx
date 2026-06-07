// MAIN APPS WRAPPER CONFIGURATION
function App() {
  return (
    <div className="desktop-screen-wrapper">
      <div className="mobile-app-container">
        {/* Added basename here so React Router knows it's running in a subfolder */}
        <Router basename="/popx-assessment">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceCard from "./components/ServiceCard";
import services from "./data/services";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <Router>
      <div className="py-10 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Our Services
        </h2>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} id={index} />
                ))}
              </div>
            }
          />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

























import { useParams, Link } from "react-router-dom";
import services from "../data/services";

function ServiceDetails() {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return <p className="text-center text-red-500">Service not found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{service.title}</h2>
      <p className="text-gray-700 mb-6">{service.description}</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Services
      </Link>
    </div>
  );
}

export default ServiceDetails;



import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

function ServiceCard({ service, id }) {
  return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        perspective={1000}
        scale={1.03}
        transitionSpeed={300}
        tiltMaxAngleX={8}   // Lower max X angle (default is 20)
        tiltMaxAngleY={8}   // Lower max Y angle (default is 20)
        className="glass-cards tilt-card h-full rounded-xl shadow-lg overflow-hidden"
      >
        <Link
          to={`/service/${id}`}
          className="relative block h-full rounded-xl bg-white bg-opacity-30 backdrop-blur-md text-black hover:text-blue-900 transition-colors duration-200"
        >
          {/* Border line */}
          <div className="absolute inset-0 rounded-xl border border-blue-100 pointer-events-none" />

          {/* Card Content */}
          <div className="flex flex-col h-full">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full rounded-t-xl"
              style={{ height: "150px" }}
            />
            <div className="flex flex-col p-4 flex-grow" style={{ color: "rgb(0, 58, 132)" }}>
              <div className="font-bold text-lg mb-2">{service.title}</div>
              <p className="mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <button
                  type="button"
                  className="w-full rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </Link>
      </Tilt>
  );
}

export default ServiceCard;



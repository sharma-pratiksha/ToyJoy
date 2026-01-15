import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Productcard from "./Productcard";

function Age() {
  const { range } = useParams();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/age/${range}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error fetching toys:", error));
  }, [range]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Toys for Age {range}
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {toys.map((toy) => (
          <Productcard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
}

export default Age;



import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/vehicles";

export default function App() {
  const [vehicles, setVehicles] = useState([]);

  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("Available");

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Load
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get(API);
    setVehicles(res.data);
  };

  // Add / Update
  const submit = async (e) => {
    e.preventDefault(); // IMPORTANT

    if (!model || !plate) {
      alert("Fill all fields");
      return;
    }

    const data = {
      model,
      plate,
      capacity,
      status,
    };

    if (editId) {
      await axios.put(`${API}/${editId}`, data);
      setEditId(null);
    } else {
      await axios.post(API, data);
    }

    clear();
    load();
  };

  // Delete
  const remove = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      load();
    } catch (e) {
      alert("Delete failed");
    }
  };

  // Edit
  const edit = (v) => {
    setEditId(v.id);
    setModel(v.model);
    setPlate(v.plate);
    setCapacity(v.capacity);
    setStatus(v.status);
  };

  // Clear
  const clear = () => {
    setModel("");
    setPlate("");
    setCapacity("");
    setStatus("Available");
    setEditId(null);
  };

  // Search + Filter
  const filtered = vehicles.filter((v) => {
    const s =
      v.model.toLowerCase().includes(search.toLowerCase()) ||
      v.plate.toLowerCase().includes(search.toLowerCase());

    const f =
      statusFilter === "All" || v.status === statusFilter;

    return s && f;
  });

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: "auto" }}>
      <h1>🚚 FleetFlow</h1>

      {/* Search + Filter */}
      <div style={{ marginBottom: 15 }}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ marginLeft: 10 }}
        >
          <option>All</option>
          <option>Available</option>
          <option>Busy</option>
        </select>
      </div>

      {/* Form */}
      <form onSubmit={submit} style={{ marginBottom: 20 }}>
        <input
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          placeholder="Plate"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />

        <input
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Available</option>
          <option>Busy</option>
        </select>

        <button type="submit" style={{ marginLeft: 10 }}>
          {editId ? "Update" : "Add"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={clear}
            style={{ marginLeft: 5 }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Table */}
      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Plate</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.model}</td>
              <td>{v.plate}</td>
              <td>{v.capacity}</td>
              <td>{v.status}</td>

              <td>
                <button onClick={() => edit(v)}>Edit</button>

                <button
                  onClick={() => remove(v.id)}
                  style={{ marginLeft: 5 }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// components/ComplaintForm.js
import { useState } from "react";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaintType: "FTC",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setPdfUrl(data.pdfUrl);
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Complaint Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="complaintType"
          value={formData.complaintType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="FTC">FTC Complaint</option>
          <option value="StateAG">State AG Complaint</option>
          <option value="ClassAction">Class-Action Exhibit</option>
        </select>
        <textarea
          name="description"
          placeholder="Complaint Details"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate PDF"}
        </button>
      </form>

      {pdfUrl && (
        <div className="mt-4">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download Complaint PDF
          </a>
        </div>
      )}
    </div>
  );
}

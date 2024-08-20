import React from "react";

function PreventiveMaintenanceLog() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Preventive Maintenance Log</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Machine Name</th>
            <th className="px-4 py-2">Maintenance Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through maintenance log data and render rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default PreventiveMaintenanceLog;

import React from "react";

function MachineList() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Machine List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Machine Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the machine list data and render rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default MachineList;

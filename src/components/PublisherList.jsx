import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PublisherList = ({ groupNumber }) => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/publishers/group/${groupNumber}`)
      .then((response) => {
        setPublishers(response.data);
      })
      .catch((err) => {
        console.log('Error: ', err.message);
      });
  }, [groupNumber]);

  const handleInputChange = (id, field, value) => {
    setPublishers((prev) =>
      prev.map((publisher) =>
        publisher.publisher_id === id
          ? { ...publisher, [field]: value }
          : publisher
      )
    );
  };

  const handleSubmit = (id) => {
    const publisher = publishers.find((pub) => pub.publisher_id === id);
    axios
      .post(`http://localhost:3000/update-publisher`, {
        publisherId: id,
        lastAssignmentDate: publisher.last_date_of_assignment,
        AssignmentType: publisher.assignment_type,
      })
      .then(() => {
        alert('Save successful!');
      })
      .catch((err) => {
        console.log('Error saving data: ', err.message);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-center">Role</th>
            <th className="px-4 py-2 border border-gray-300 text-center">Name</th>
            <th className="px-4 py-2 border border-gray-300 text-center">Last Date of Assignment</th>
            <th className="px-4 py-2 border border-gray-300 text-center">Assignment Type</th>
            <th className="px-4 py-2 border border-gray-300 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {publishers.map((publisher) => (
            <tr
              key={publisher.publisher_id}
              className="hover:bg-gray-100 even:bg-gray-50"
            >
              <td
                className={`px-4 py-2 border border-gray-300 text-center ${
                  publisher.publisher_role === 'ELDER'
                    ? 'bg-purple-100 text-purple-700'
                    : publisher.publisher_role === 'MS'
                    ? 'bg-red-100 text-red-700'
                    : publisher.publisher_role === 'RP'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {publisher.publisher_role}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-left">
                {publisher.publisher_name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <input
                  type="date"
                  value={
                    publisher.last_date_of_assignment
                      ? publisher.last_date_of_assignment.split('T')[0]
                      : ''
                  }
                  onChange={(e) =>
                    handleInputChange(
                      publisher.publisher_id,
                      'last_date_of_assignment',
                      e.target.value
                    )
                  }
                  className="w-full px-2 py-1 border border-gray-300 rounded text-left"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <select
                  value={publisher.assignment_type || ''}
                  onChange={(e) =>
                    handleInputChange(
                      publisher.publisher_id,
                      'assignment_type',
                      e.target.value
                    )
                  }
                  className="w-full px-2 py-1 border border-gray-300 rounded text-left"
                >
                  <option value="Pahayag">Pahayag</option>
                  <option value="Pagtatanghal - Mamamahayag">
                    Pagtatanghal - Mamamahayag
                  </option>
                  <option value="Pagtatanghal - May Bahay">
                    Pagtatanghal - May Bahay
                  </option>
                  <option value="Pagbabasa ng Bibliya">
                    Pagbabasa ng Bibliya
                  </option>
                  <option value="Chairman">Chairman</option>
                  <option value="CBS">CBS</option>
                </select>
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <button
                  className="py-3 px-6 bg-slate-200 rounded font-bold text-slate-600 hover:text-white hover:bg-slate-400 transition"
                  onClick={() => handleSubmit(publisher.publisher_id)}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PublisherList.propTypes = {
  groupNumber: PropTypes.number.isRequired,
}

export default PublisherList;

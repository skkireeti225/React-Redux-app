import React from 'react';

const projectListItem = ({data}) => {
  return (
            <tr>
                <td>{data.projectName}</td>
                <td>{data.Budget}</td>
                <td>{data.managerName}</td>
                <td>{data.numberOfDevelopers}</td>
                <td>{data.deadline}</td>
            </tr>
  );
};

export default projectListItem;

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProjectListRow = ({project}) => {
  return (
    <tr>
      <td><a href={project.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/sabrinadowla14/' + project.id}>{project.title}</Link></td>
      <td>{project.userId}</td>
      <td>{project.category}</td>
      <td>{project.length}</td>
    </tr>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;

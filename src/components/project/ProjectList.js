import React, {PropTypes} from 'react';
import ProjectListRow from './ProjectListRow';

const ProjectList = ({projects}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>User</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {projects.map(project =>
        <ProjectListRow key={project.id} project={project}/>
      )}
      </tbody>
    </table>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;

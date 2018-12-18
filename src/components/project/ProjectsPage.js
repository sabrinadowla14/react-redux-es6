import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectList from './ProjectList';
import {browserHistory} from 'react-router';

class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddProjectPage = this.redirectToAddProjectPage.bind(this);
}

projectRow(project,index) {
   return <div key={index}>{project.title}</div>;
 }
 redirectToAddProjectPage() {
    browserHistory.push('/project');
  }
//add form here
   render() {
     const {projects} = this.props;
     return(
       <div>
        <h1>Projects</h1>
          <input type="submit"
                 value="Add Project"
                 className="btn btn-primary"
                 onClick={this.redirectToAddProjectPage}/>
        <ProjectList projects={projects}/>
      </div>
     );
   }
}

ProjectsPage.propTypes = {

  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}


//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProp);
//export default connectedStateAndProps(ProjectsPage);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);

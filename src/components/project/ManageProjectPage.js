import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectForm from './ProjectForm';
import toastr from 'toastr';


export class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

     this.state = {
      project: Object.assign({}, props.project),
      errors: {},
      saving: false
    };

    this.updateProjectState = this.updateProjectState.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.id != nextProps.project.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({project: Object.assign({}, nextProps.project)});
    }
  }

  updateProjectState(event) {
    const field = event.target.name;
    let project = Object.assign({}, this.state.project);
    project[field] = event.target.value;
    return this.setState({project: project});
  }



  saveProject(event) {
    event.preventDefault();
  /*  if (!this.projectFormIsValid()) {
      return;
    }*/

    this.setState({saving: true});
    this.props.actions.saveProject(this.state.project)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });

  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Project saved');
    this.context.router.push('/projects');
  }

  render() {
    return (


     <ProjectForm
        allUsers={this.props.users}
        onChange={this.updateProjectState}
        onSave={this.saveProject}
        project={this.state.project}
        errors={this.state.errors}
        saving={this.state.saving}

    />

    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageProjectPage.contextTypes = {
  router: PropTypes.object
};

function getProjectById(projects, id) {
  const project = projects.filter(project => project.id == id);
  if (project) return project[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const projectId = ownProps.params.id; // from the path `/project/:id`
  let project = {id: '', watchHref: '', title: '', userId: '', length: '', category: ''};
  if (projectId && state.projects.length > 0) {
     project = getProjectById(state.projects, projectId);
   }
  const usersFormattedForDropdown = state.users.map(user => {
   return {
    value: user.id,
    text: user.firstName + " " + user.lastName
  };
});

  return {
    project: project,
    users: usersFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);

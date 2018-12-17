import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';

class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      project: { title: "" }
    };
    this.onTitleChange=this.onTitleChange.bind(this);
    this.onClickSave=this.onClickSave.bind(this);
  }
  //Create our OnTitleChange functio
   onTitleChange(event) {
     const project = this.state.project;
     project.title = event.target.value;
     this.setState({project: project});
   }
  onClickSave() {
    this.props.actions.createProject(this.state.project)
  }

 projectRow(project,index) {
   return <div key={index}>{project.title}</div>;
 }


  //add form here
   render() {

     return(
       <div>
        <h1>Projects</h1>
        {this.props.projects.map(this.projectRow)}
        <h2>Add Project:</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.project.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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

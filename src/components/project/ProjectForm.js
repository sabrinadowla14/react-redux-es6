import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProjectForm = ({project, allUsers, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Project</h1>
      <TextInput
        name="title"
        label="Title"
        value={project.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="userId"
        label="User"
        value={project.userId}
        defaultOption="Select User"
        options={allUsers}
        onChange={onChange} error={errors.userId}/>

      <TextInput
        name="category"
        label="Category"
        value={project.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={project.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ProjectForm.propTypes = {
  project: React.PropTypes.object.isRequired,
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ProjectForm;

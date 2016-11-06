import React from 'react-redux';


export const sourceCodeUrl = () => {
  if (this.props.program.source_code_url) {
    return (
      <a
        href={this.props.program.source_code_url}
        className="link">
        Source code
      </a>
    );
  } else {
    return(<div></div>);
  }
}

export const editAndDelete = () => {
  const handleDelete = e => {
    e.preventDefault();
    this.props.destroyProgram();
  }

  return (
    <Link to={`programs/${this.props.program.id}/edit`}>
      <span className="link">
        Edit
      </span>
    </Link>
    &nbsp;
    <span className="link"
      onClick={this.handleDelete}>
      Delete
    </span>
  )
}

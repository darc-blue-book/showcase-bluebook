import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './project.reducer';

export interface IProjectProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> { }

export class Projects extends React.Component<IProjectProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { projectList, match } = this.props;
    return (
      <div className="row my-3">
        {projectList.map((project, i) => (
          <div className="col-md-4" key={`entity-${i}`}>
            <div className="card mb-4 shadow-sm">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={'content/images/projects/' + project.image} />
              <span className="gsp">{project.score} GSP</span>
              <div className="card-body">
                <p className="card-text">
                  <h3>{project.title}</h3>
                  {/* {project.start}, {project.end},  */}

                  {project.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link type="button" className="btn btn-sm btn-outline-primary" to={`/entity/project/${project.id}`}>View</Link>
                  </div>
                  <small className="text-muted btn btn-sm btn-outline-primary">Expert needed</small>
                  <small className="text-muted">Funded: 80%</small>
                </div>
              </div>
            </div>

            {/* <td>{project.expertId ? <Link to={`expert/${project.expertId.id}`}>{project.expertId.id}</Link> : ''}</td>
            <td>{project.initiatorId ? project.initiatorId.id : ''}</td> */}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ project }: IRootState) => ({
  projectList: project.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiEpisodes } from '../../../actions';

const tableHeaderData = [
    {
        id: 1,
        name: 'Номер',
    },
    {
        id: 2,
        name: 'Название',
    },
    {
        id: 3,
        name: 'Описание',
    },
]

class Episodes extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.requestApiEpisodes(match.params.id);
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <h1>Episodes</h1>
                <div className="episodes-table">
                    <div className="tableHeader">
                        {
                            tableHeaderData.map((item) => (
                                <div className="table-item" key={item.id}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    {
                        data.episodes !== null ? 
                        <React.Fragment>
                            {
                                data.episodes.map((item) => (
                                    <div key={item.id} className="episodes-tableData">
                                        <div className="table-item">{item.number}</div>
                                        <div className="table-item"><a href={item.url}>{item.name}</a></div>
                                        <div className="table-item">{item.summary}</div>
                                    </div>
                                ))
                            }
                         </React.Fragment>
                         : null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ data: state.episodes });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiEpisodes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);

// {
//     data.episodes.map((item) => (
//         <div className="episodes-tData">
//             <div>item.name</div>
//             <div></div>
//             <div></div>
//         </div>
//     ))
// }

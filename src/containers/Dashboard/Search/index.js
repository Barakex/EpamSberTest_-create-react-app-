import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Modal from "../../../components/Modal";
import { requestApiData, toggleModalWindow } from '../../../actions';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchCache: null,
        }
    }

    getSearchValue(e) {
        this.setState({
            searchCache: e.target.value,
        });
    }

    handleClick () {
        const {searchCache} = this.state;
        if (searchCache) {
            this.props.requestApiData(searchCache);
        }
    }

    closeWindow() {
        this.props.toggleModalWindow(false);
    }

    render() {
        const { search } = this.props;
        if (search.modalWindow) {
            return (
                <Modal hendleClick={() => this.closeWindow()} text="Результатов не найдено"/>
            );
        };

        return (
            <div className="search">
                <h1>Search</h1>
                <div>
                    <input type='text' onChange={(e) => this.getSearchValue(e)} />
                    <button onClick={() => this.handleClick()}>Search</button>
                </div>
                    {
                        search.data.length !== 0 ? 
                            <div className="search-serialConteiner" >
                                {
                                    search.data.map((item) => (
                                        <Link to={`/episodes/${item.show.id}`} key={item.show.id}>
                                            <div className="search-serialItem">
                                                <h3>{item.show.name}</h3>
                                                {
                                                    item.show.image ? 
                                                        <div>
                                                            <img alt={item.show.name} src={item.show.image.medium} />
                                                        </div>
                                                    :
                                                    <div className="search-imageError">
                                                        <span>Изображение не найдено</span>
                                                    </div>
                                                }
                                            </div>
                                        </Link>
                                )) 
                                }
                            </div>
                        : <h3>Enter the name of the series</h3>
                    }
                <div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ search: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, toggleModalWindow }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
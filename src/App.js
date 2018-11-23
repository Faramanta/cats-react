import React from 'react';
import './index.css';
import Card from './components/Card';
import products from './data/products';
import 'core-js/fn/array/find';
// import {isTablet} from 'react-device-detect';
import {
    TabletView,
    isTablet
} from 'react-device-detect';

class App extends React.Component {
    state = {
        list: []
    };

    componentDidMount() {
        const list = products.map(function(it) {
            return ({
                ...it,
                hovered: false,
                selected: false
            })
        });
        this.setState({list})
        }

    handleSelect = (id, e) => {
        e.preventDefault();
        const target = this.state.list.find((el) => el.id === id);
        if (target.available !== 'disabled') {
            const newList = this.state.list;
            target.selected = !target.selected;
            target.className = target.className.replace('hover', '').replace(' ', '');
            newList[id - 1] = target;
            this.setState({
                list: newList
            });
        }
    };

    addHoverClass = (id) => {
        const target = this.state.list.find((el) => el.id === id);
        if (target.selected && target.className.indexOf('hover') < 0) {
            const newClass = target.className + ' hover ';
            const newList = this.state.list;
            newList[id - 1].className = newClass;
            this.setState({
                list: newList
            });
        }
    };

    render() {
        if (this.state.list.length) {
            return (
                <div className="page">
                    <div className="wrapper">
                        <h1 className="ttl1">Ты сегодня покормил кота?</h1>

                        <div className={`${isTablet ? 'card-list card-list-tablet' : 'card-list'}` }>
                            <Card data={this.state.list} handleSelect = {this.handleSelect} addHoverClass = {this.addHoverClass}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Список не загружен</div>
            )
        }
    }
}

export default App;

import React, {Component} from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все'
        },
        {
          key: 'chair',
          name: 'Стулья'
        },
        {
          key: 'table',
          name: 'Столы'
        },
        {
          key: 'lamp',
          name: 'Свет'
        }
      ]
    }
  }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div
            key={el.key}
            onClick={() => this.props.chooseCategory(el.key)}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
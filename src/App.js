import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import Items from "./Components/Items";
import order from "./Components/Order";
import Categories from "./Components/Categories";
import showFullItem from "./Components/ShowFullItem";
import ShowFullItem from "./Components/ShowFullItem";
// import {logDOM} from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кресло',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chair',
          price: '299.99'
        },
        {
          id: 2,
          title: 'Кресло-качалка',
          img: 'chair2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chair',
          price: '499.99'
        },
        {
          id: 3,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'table',
          price: '799.99'
        },
        {
          id: 4,
          title: 'Люстра',
          img: 'lamp-top.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamp',
          price: '199.99'
        },
        {
          id: 5,
          title: 'Торшер',
          img: 'lamp-bottom.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamp',
          price: '299.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.state.currentItems = this.state.items
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />

        {this.state.showFullItem &&
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />}

        <Footer/>
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})

      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false

    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true
    })

    if (!isInArray) this.setState({orders: [...this.state.orders, item]})
  }
}

export default App
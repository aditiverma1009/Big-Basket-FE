import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Container from '../Container/Container';
import DiplayPage from '../DisplayPage/DisplayPage';
import AllOrdersPage from '../AllOrdersPage/AllOrdersPage';
import Basket from '../Basket/Basket';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      inventory: {},
      resp0Code: 0,
      resp1Code: 0,
      basket: [],
      allOrder: [],
    };
  }

  componentDidMount() {
    axios.post('/products')
      .then((response) => {
        this.setState({
          page: 0,
          inventory: response.data.data,
          resp0Code: response.data.code,
        });

        console.log(this.state.inventory);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onShowAllOrders=() => {
    axios.post('/orders')
      .then((response) => {
        const value = this.addDetailsToOrder(response.data.data);
        this.setState({
          page: 1,
          allOrder: value,
          resp1Code: response.code,
        });
        console.log(this.state.allOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  onAddItem=(itemid) => {
    const { inventory } = this.state;
    const { basket } = this.state;
    const newbasket = [];
    return Object.keys(inventory).map(eachKeyOfCategory => inventory[eachKeyOfCategory]
      .map((eachItem) => {
        console.log('hi');
        let found = 0;
        Object.keys(basket).forEach((eachItemInBasket) => {
          if (itemid === eachItem.itemid && eachItemInBasket.itemid === itemid) {
            newbasket.push({
              itemid,
              category: eachItem.category,
              brand: eachItem.brand,
              title: eachItem.title,
              description: eachItem.description,
              quantity: (eachItemInBasket.quantity + 1),
            });

            found = 1;
          }
          console.log(basket);
        });
        if (found === 0 && eachItem.itemid === itemid) {
          console.log('push');
          newbasket.push({
            itemid,
            category: eachItem.category,
            brand: eachItem.brand,
            title: eachItem.title,
            description: eachItem.description,
            quantity: 1,
          });
        }
        this.setState({
          basket: newbasket,
        });
        console.log('hiiiii');
        console.log(newbasket);
        return newbasket;
      }));
  }

  onAddItem=(itemid) => {
    // console.log('hi');
    const { inventory } = this.state;
    const { basket } = this.state;
    let found = 0;
    Object.keys(basket).forEach((eachItemInBasket) => {
      const valueofeach = basket[eachItemInBasket];
      if (valueofeach.itemid === itemid) {
        found = 1;
        valueofeach.availableQuantity += 1;
        this.setState({
          basket,
        });
        console.log(this.state.basket);
      }
    });
    Object.keys(inventory).map(eachKeyOfCategory => inventory[eachKeyOfCategory]
      .map((eachItem) => {
        if (eachItem.itemid === itemid && found === 0) {
          basket.push({
            itemid,
            category: eachItem.category,
            brand: eachItem.brand,
            cost: eachItem.cost,
            title: eachItem.title,
            description: eachItem.description,
            availableQuantity: 1,
          });
        }
        this.setState({
          basket,
        });
        console.log(this.state.basket);
        return true;
      }));
  }

  onDeleteItem=(itemid) => {
    // console.log('hi');
    const { inventory } = this.state;
    const { basket } = this.state;
    let found = 0;
    Object.keys(basket).forEach((eachItemInBasket) => {
      const valueofeach = basket[eachItemInBasket];
      if (valueofeach.itemid === itemid) {
        found = 1;
        valueofeach.availableQuantity -= 1;
        this.setState({
          basket,
        });
        console.log(this.state.basket);
      }
    });
  }

  onBasketClick=() => {
    console.log('hi basket');
    this.setState({
      page: 2,
    });
  }


  onCheckoutButton=() => {
    const basket = this.state.basket;
    console.log(basket);
    const sortedbasket = this.sortBasketBy(basket);
    console.log(sortedbasket);
    axios.post('/checkout', {
      order: sortedbasket,
    })
      .then((response) => {
        console.log(response);
        this.onShowAllOrders();
      }).then(() => {
        this.setState({
          page: 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  sortBasketBy = (data) => {
    const itemByCategory = {};
    data.forEach((eachitem) => {
      if (eachitem.category in itemByCategory) {
        // console.log(`if not exist${item.category}`);
        itemByCategory[eachitem.category].push(eachitem);
      } else {
        const { category } = eachitem;
        itemByCategory[category] = [];
        itemByCategory[category].push(eachitem);
      }
    });
    console.log(data);
    console.log(itemByCategory);
    return itemByCategory;
  };

  addDetailsToOrder=(allOrder) => {
    const { inventory } = this.state;
    allOrder.forEach((eachOrderSet) => {
      eachOrderSet.orderitems.forEach((eachOrderItem) => {
        Object.keys(inventory).map(eachKeyOfCategory => inventory[eachKeyOfCategory]
          .map((eachItem) => {
            if (eachOrderItem.ordereditemid === eachItem.itemid) {
              eachOrderItem.category = eachItem.category;
              eachOrderItem.brand = eachItem.brand;
              eachOrderItem.title = eachItem.title;
              eachOrderItem.description = eachItem.description;
            }
            return true;
          }));
      });
    });
    const sortedOrders = this.sorting(allOrder);
    return (sortedOrders);
  }


  sortBy=(data) => {
    const itemByCategory = {};
    data.forEach((eachitem) => {
      if (eachitem.category in itemByCategory) {
        // console.log(`if not exist${item.category}`);
        itemByCategory[eachitem.category].push(eachitem);
      } else {
        const { category } = eachitem;
        itemByCategory[category] = [];
        itemByCategory[category].push(eachitem);
      }
    });
    return itemByCategory;
  }

  sorting=data => data.map((orderset) => {
    const sortedtempobj = this.sortBy(orderset.orderitems);
    return sortedtempobj;
  })

  render() {
    // console.log(this.state.allOrder);
    console.log(this.state.page);
    if (this.state.page === 0 && (this.state.resp0Code === 200 || this.state.resp0Code === 201)) {
      return (
        <div className>
          <Header
            inventory={this.state.inventory}
            basket={this.state.basket}
            onShowAllOrders={() => this.onShowAllOrders()}
            onBasketClick={() => this.onBasketClick()}
          />
          <Container >
            <DiplayPage
              inventory={this.state.inventory}
              onAddItem={itemid => this.onAddItem(itemid)}
              onDeleteItem={itemid => this.onDeleteItem(itemid)}
            />
          </Container >
        </div>
      );
    } else if (this.state.page === 1) {
      return (
        <div className>
          <Header
            inventory={this.state.inventory}
            basket={this.state.basket}
            onShowAllOrders={() => this.onShowAllOrders()}
            onBasketClick={() => this.onBasketClick()}
          />
          <Container >
            <AllOrdersPage allOrder={this.state.allOrder} />
          </Container >
        </div>
      );
    } else if (this.state.page === 2) {
      return (
        <div className="BasketPage">
          <Header
            basket={this.state.basket}
            inventory={this.state.inventory}
            onShowAllOrders={() => this.onShowAllOrders()}
            onBasketClick={() => this.onBasketClick()}
          />


          <Basket
            basket={this.state.basket}
            onCheckoutButton={() => this.onCheckoutButton()}

          />

        </div>
      );
    }
    return (<div>hi</div>);
  }
}

export default App;


import React, { useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import TodoFeature from './features/Todo';
import productApi from './api/productApi';
import CouterFeature from './features/Counter';
import './App.css';
import styled from 'styled-components';
import Header from 'components/Header';

//CSS in JS
// const Title = styled.h1`
//   text-align: center;
//   font-bold: bold;

//   color: ${(props) => props.color || 'green'};
// `;

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:posId" to="/posts /:postId" />
        <Route path="/" component={CouterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* Footer */}
    </div>
  );
}

export default App;

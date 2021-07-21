/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    /*     <Layout> */
    <div>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platfix'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  /*     </Layout> */
  );
};

export default App;

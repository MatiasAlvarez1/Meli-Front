import React, {useEffect, useState} from "react";
import { Router, Route, useLocation } from "react-router-dom";
import "./App.scss";
import {searchProduct, searchProducts} from "../../services/search.service.js"

import Searchbox from "../Searchbox/Searchbox";
import history from '../../config/history';
import ProductsList from "../ProductsList/ProductsList";
import ProductDescription from "../ProductDescription/ProductDescription";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Home from "../Home/Home";

function App() {

  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState(null);
  const [searchboxValue, setSearchboxValue] = useState("");

  let location = useLocation();

  const handleSearch = (data) =>{
    history.push(`/items?search=${data}`);
  }

  const handleBreadcrumbSearch = (data) => {
    setSearchboxValue(data);
    history.push(`/items?search=${data}`);
  }

  const handleSelectProduct = (product) => {
    setSearchboxValue("");
    history.push(`/items/${product.id}`);
  } 

  const handleError = (error) => {
    setError(error);
    setLoading(false);
    history.push(`/error`);
  } 

  const handleLocationChange = async(loc) =>{
      setLoading(true);
      setBreadcrumb(null);

      let pathname = loc.pathname.split("/");
      if(pathname.length > 2){
        let id = pathname[2];
        try {
          const response = await searchProduct(id);
          setLoading(false);

          if(response.hasError){
            handleError(response.hasError);
          }else{
            setProduct(response.item);
            setBreadcrumb(response.breadcrumb);
          }
          
        } catch (error) {
          handleError({statusCode: 500, message: "Ocurrio un error al realizar la solicitud"});
        }
      }else{
        let location = window.location.search;
        let params = new URLSearchParams(location);
        let search = params.get('search');

        if(search){
          try {
            const response = await searchProducts(search);
  
            if(response.hasError === 500){
              handleError(response.hasError);
            }else{
              setResults(response.search);
              setBreadcrumb(response.breadcrumb);
              setLoading(false);
            }
          } catch (error) {
            handleError({statusCode: 500, message: "Ocurrio un error al realizar la solicitud"});
          }
        }else{
          setLoading(false);
        }
      }
  }

  useEffect(()=>{
    history.listen(handleLocationChange);
  },[]);

  useEffect(()=>{
    handleLocationChange(location);
  },[]);

  return (
    <>
      <Router history={history}>
        <div className="app__header__content">
          <Header handleSearch={handleSearch} searchboxValue={searchboxValue}></Header>
        </div>
        {breadcrumb && 
          <div className="app__breadcrumb__content">
            <Breadcrumb breadcrumb={breadcrumb} handleSearch={handleBreadcrumbSearch}/>
          </div>
        }
        <div className="app__content">
          {loading && <Loader />}
          <Route exact path="/">
            {!loading && !results && !product && <Home />}
          </Route>
          <Route exact path="/items">
            {!loading && results && <ProductsList results={results} handleSelectProduct={handleSelectProduct}/>}
          </Route>
          <Route exact path="/items/:id">
            {!loading && product && <ProductDescription product={product}/>}
          </Route>
          <Route exact path="/error">
            {<Error {...error}/>}
          </Route>
        </div>
      </Router>
    </>
  );
}

const Header = (props) => {
  return (
    <div className="header__container">
      <div className="header__container__logo">
        <div className="header__logo"></div>
      </div>
      <div className="header__container__searchbox">
        <Searchbox {...props}></Searchbox>
      </div>
    </div>
  );
};


export default App;


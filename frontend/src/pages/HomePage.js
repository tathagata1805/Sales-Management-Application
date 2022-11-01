import React, { useState, useEffect } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";
import { Row, Col } from "antd";
import ItemList from "../components/ItemList";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [selecedCategory, setSelecedCategory] = useState("drinks");
  const categories = [
    {
      name: "drinks",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/430/430561.png",
    },
    {
      name: "rice",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3174/3174880.png",
    },
    {
      name: "noodles",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1471/1471262.png",
    },
  ];

  const dispatch = useDispatch();

  // USEEFFECT
  useEffect(() => {
    const getAllItems = async () => {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const { data } = await axios.get(
          "http://localhost:5000/api/items/get-item"
        );
        setItemsData(data);
        dispatch({ type: "HIDE_LOADING" });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, [dispatch]);
  return (
    <DefaultLayout>
      <div className="d-flex">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`d-flex category ${
              selecedCategory === category.name && "category-active"
            }`}
            onClick={() => setSelecedCategory(category.name)}
          >
            <h4>{category.name}</h4>
            <img
              src={category.imageUrl}
              alt={category.name}
              height="30"
              width="50"
            />
          </div>
        ))}
      </div>
      <Row>
        {itemsData
          .filter((i) => i.category === selecedCategory)
          .map((item) => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemList key={item.id} item={item} />
            </Col>
          ))}
      </Row>
    </DefaultLayout>
  );
};

export default Homepage;

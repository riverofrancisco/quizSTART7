import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { categories } from "../../data/data";
import Card from "./Card";

import { categoriesICON } from "../../data/data";

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);

  const [categoriesInfo, setCategoriesInfo] = useState<any | null>(null);

  const getCategoriesInfo = async () => {
    const info = await categories();
    setCategoriesInfo(info);
  };

  const handleClick = () => {

  };

  useEffect(() => {
    getCategoriesInfo();
  }, []);

  if (categoriesInfo) {
    return (
            <Box display="flex" flexWrap="wrap">
            {categoriesInfo.map((cat: any, index: number) => <Card key={cat.title} id={cat.id} title={cat.title}  questions={cat.questions} icon={categoriesICON[index].icon}/> )      
        }
            </Box>
        )

  }
  return <div>...</div>;
};

export default CardList;

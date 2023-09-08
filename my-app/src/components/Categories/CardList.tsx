import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { categories } from "../../data/data";
import { questions } from "../../data/data";
import { QuestionsUpdater } from "../../redux/quiz/actions";
import Card from "./Card";

import { categoriesICON } from "../../data/data";

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [categoriesInfo, setCategoriesInfo] = useState<any | null>(null);

  const getCategoriesInfo = async () => {
    const info = await categories();
    setCategoriesInfo(info);
  };


  useEffect(() => {
    getCategoriesInfo();
  }, []);

  if (categoriesInfo) {
    return (
            <Box display="flex" flexWrap="wrap" width="100%" justifyContent="center">
            {categoriesInfo.map((cat: any, index: number) => 
            <Card  key={cat.title} ID={cat.id} title={cat.title}  questions={cat.questions} icon={categoriesICON[index].icon}/>   
               )      
        }
            </Box>
        )

  }
  return <div>...</div>;
};

export default CardList;

import React from 'react';
import { Herro } from '../../components/Herro/Herro';
import HerroImg2 from "../../assets/images/herro/herro_1.png";
import Step from './Step/Step';
import Ques from './Ques/Ques';

export default function Create() {
  return (
    <>
      <Herro title={"Create plan"} suptitle={"Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."} img={HerroImg2} />
      <Step />
      <Ques />
    </>
  )
}

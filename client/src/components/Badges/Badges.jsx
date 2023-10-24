import React from "react";
import './Badges.css'
import { useAuthContext } from "../../hooks/useAuthContext"
import Badge1 from "./badgecomps/Badge1";
import Badge2 from "./badgecomps/Badge2";
import Badge3 from "./badgecomps/Badge3";
import Badge4 from "./badgecomps/Badge4";
import Badge5 from "./badgecomps/Badge5";
import Badge6 from "./badgecomps/Badge6";
import Badge7 from "./badgecomps/Badge7";
import Badge8 from "./badgecomps/Badge8";
import Badge9 from "./badgecomps/Badge9";
import Badge10 from "./badgecomps/Badge10";
import Badge11 from "./badgecomps/Badge11";
import Badge12 from "./badgecomps/Badge12";



const Badges = () => {
  const {user} = useAuthContext()
  return (
    <div>
      <div className="main-wrapper">
        
        {
          user.coin>='100' &&
          <Badge1/>

        }

        {
          user.coin>='250' &&
          <Badge2/>

        }

        {
          user.coin>='500' &&
          <Badge3/>

        }

        {
          user.coin>='1000' &&
          <Badge4/>

        }

        {
          user.coin>='2500' &&
          <Badge5/>

        }

        {
          user.coin>='5000' &&
          <Badge6/>

        }

        {
          user.coin>='7500' &&
          <Badge7/>

        }

        {
          user.coin>='10000' &&
          <Badge8/>

        }

        {
          user.coin>='15000' &&
          <Badge9/>

        }

        {
          user.coin>='20000' &&
          <Badge10/>

        }

        {
          user.coin>='25000' &&
          <Badge11/>

        }

        {
          user.coin>='40000' &&
          <Badge12/>

        }

      </div>
      
    </div>
  );
};

export default Badges;

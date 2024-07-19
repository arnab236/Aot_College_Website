import React from 'react'
import Capgemini from "../assets/cap_ali.png"
import Persistent from "../assets/per_ali.png"
import Tcs from "../assets/tcs_ali.png"
import Wipro from "../assets/wipro_ali.png"
import Kpit from "../assets/kpit_ali.png"
import Cognizant from "../assets/cog_ali.png"
import Cisco from "../assets/cisco_ali.png"
import TechMahindra from "../assets/tm_ali.png"
import Google from "../assets/ggl_ali.png"
import Cyient from "../assets/cyient_ali.png"
function Alliance() {
  return (
    <>
          <div className="mx-8 flex gap-8 items-center justify-center">
              <img src={Cisco} alt="cisco"/>
              <img src={Wipro} alt="wipro"  />
              <img src={Cyient} alt="cyient"/>
              <img src={Google} alt="google" />
              <img src={Tcs} alt="tcs"  />
              <img src={TechMahindra} alt="TechMahindra"  />
              <img src={Persistent} alt="persistent"  />
              <img src={Cognizant} alt="cognizant"/>
              <img src={Capgemini} alt="capgemini"  />
              <img src={Kpit} alt="kpit"/>
          </div>
        </>
  )
}

export default Alliance
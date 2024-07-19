import React from "react";
import SecNav from "./SecNav";
import studentsbgImg from "../assets/studentsbgImg.jpeg";
import Footer from "./Footer";
import ArdourLogo from "../assets/Ardour-Logo.jpg";
import ArdourImg from "../assets/Ardour_Img.jpg";
import AcclivitiesImg from "../assets/Acclivities-Image.jpg";
import AcclivitiesLogo from "../assets/Acclivities-Logo.jpg";
import AcuityImg from "../assets/Acuity-Image.jpg";
import AcuityLogo from "../assets/Acuity-Logo.jpg";
import AnalectsImg from "../assets/Analects-Image.jpg";
import AnalectsLogo from "../assets/Analects-Logo.jpg";
import AgileLogo from "../assets/Agile-Logo.jpg";
import AgileImg from "../assets/Agile_Img.jpg";
import { NavLink } from "react-router-dom";
function Students() {
  return (
    <>
      <main className="w-full selection:bg-black selection:text-white">
        <div className="z-50 w-full md:h-auto fixed bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <SecNav />
        </div>
        <section className="w-full h-screen  bg-center bg-no-repeat bg-cover">
          <div className="rounded-xl w-full lg:h-[80%] md:h-[85%] h-screen xl:flex xl:justify-center xl:items-center xl:mx-auto border border-solid border-black">
            <img
              src={studentsbgImg}
              alt="student"
              className="w-full h-full filter blur-[2px] brightness-75 object-cover md:object-fill rounded-xl"
            />
            <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold absolute  xl:top-[35%] lg:top-[30%] md:top-[30%] xl:mx-auto lg:mx-[35%] md:mx-[30%] sm:mx-[35%] xs:mx-[27%] mx-[25%] top-[20%] text-white font-['headline'] ">
              Life at AOT
            </h1>
            <p className="text-center xs:text-lg  font-bold absolute top-[40%] xl:top-[45%] lg:top-[50%] md:top-[50%] xl:mx-auto lg:mx-[10%]  mx-[5%]  text-white font-['para'] xl:px-72 text-pretty">
              The Comprehensive Curriculum at Academy of Technology creates
              space for various activities beyond the university prescribed
              syllabus. AOT organizes several seminars, industrial visits,
              invited lectures and national/international conferences on a
              regular basis to enhance the academic knowledge and professional
              competence of students. Renowned academicians and experts from top
              corporate firms visit the college to speak to the students about
              recent advancements in technology. Arrangement is also made to
              broadcast webinars relevant to the academic interests of the
              students.
            </p>
          </div>
        </section>

        <h1 className=" underline underline-offset-4 text-xl md:text-4xl text-center mb-16 mt-20 font-[headline]">
          Clubs & Communities
        </h1>

        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="bg-white w-48 md:w-52 h-24 p-4 rounded-full border-2 border-black">
                <img src={ArdourLogo} alt="Ardour" className="w-full h-full" />
              </div>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-[headline]">
                Ardour - The Performing Arts Community
              </h1>
            </div>

            <div className="m-12 flex flex-col lg:flex-row justify-center gap-8 borde">
              <div className="w-full lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={ArdourImg}
                  alt="Ardour"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="lg:w-[60%] h-full">
                <p className=" md:text-xl font-[para] leading-6">
                  This community brings together students to stare a common
                  platform where they can showcase their talents in dance,
                  drama, music, songs and every other form of performing arts.
                </p>
                <p className="md:text-xl font-[para] leading-6">
                  Every year community members of ARDOUR organise ‘ARCADIA’ –
                  the most vibrant socio-cultural event of the campus. Over the
                  past years this event has attained an unparalleled prestige
                  across the state with outstanding guest performances by KK (in
                  2014), Sunidhi Chauhan (in 2015), Sukhwinder Singh (in 2016),
                  Sonu Nigam (in 2017), Amit Trivedi (2018) & Armaan
                  Malik(2023).
                </p>
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                  A Few Achievements of our Students:
                </h4>
                <ul className="text-sm md:text-lg">
                  <li>
                    &#x2022; Souranil Sarkar (3rd yr EE) won 1st position in
                    Rabindra-Sangeet, Najrool Geeti & Elocution in the
                    state-level intra-WBPDCL cultural meet organized by BTPS
                    Recreation Club in 2017
                  </li>
                  <li>
                    &#x2022; Saikat Dutta (3rd yr ECE) cleared the first round
                    of the national dance competition Dance India Dance, 2015
                  </li>
                  <li>
                    &#x2022; Rwitam Bandyopadhyay (4th yr CSE) got 7th position
                    in India on Guitar, a National level guitar competition
                    organised by Blade & powered by DigiTech, December 2013 –
                    January 2014.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="bg-white w-32 h-32 p-4 rounded-full border-2 border-black overflow-hidden">
                <img
                  src={AnalectsLogo}
                  alt="Analects"
                  className="w-full h-full"
                />
              </div>
              <h1 className=" text-2xl md:text-3xl font-[headline]">
                Analects - The Literary Club
              </h1>
            </div>

            <div className="m-12 flex flex-col-reverse lg:flex-row justify-center gap-8 ">
              <div className="lg:w-[60%] h-full">
                <p className="md:text-xl font-[para] leading-6">
                  The collective efforts of this community on creative writing,
                  painting, quiz, debating, photograph and other spheres of
                  creative performances round the year enhance the students’
                  life manifold.
                </p>
                <p className="md:text-xl font-[para] leading-6">
                  ‘HUMATRONICS’ — the annual talent search competition and
                  ‘WALLZINE’ — the wall magazine published by ‘ANALECTS’ have
                  been widely acclaimed through the years.
                </p>
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                  A Few Achievements of our Students:
                </h4>
                <ul className="text-sm md:text-lg">
                  <li>
                    &#x2022; Shuvrodeep Pal (3rd yr AEIE) was the winner of the
                    national DELL Campassador My PC My Story contest in 2017.
                  </li>
                  <li>
                    &#x2022; Atriz Ray (1st yr ME) was a regular contributor to
                    TTIS and writes on various social issues in the “Your Voice”
                    Column of The Telegraph
                  </li>
                  <li>
                    &#x2022; Sanjana Majumdar (AEIE 2015 Batch) was a Freelance
                    Writer associated with The Statesman & covered the
                    International Conference on Functional Materials-2014 at
                    IIT, Kharagapur for The Statesman, Campus, April 22, 2014
                    and the IEEE sponsored International Conference at AOT for
                    The Statesman in “Laced with Humour”, 11 February, 2015.
                  </li>
                  <li>
                    &#x2022; Subhajit Khan (EE 2016 Batch) has been the
                    Co-editor of a Bengali literary magazine MASTUL from 2013 to
                    the present.
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={AnalectsImg}
                  alt="Analects"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="bg-white w-32 h-32 p-4 rounded-full border-2 overflow-hidden border-black">
                <img
                  src={AgileLogo}
                  alt="Agile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-[headline]">
                Agile - The Sports Club
              </h1>
            </div>

            <div className="m-12 flex flex-col lg:flex-row justify-center gap-8 borde">
              <div className="lg:w-[40%] h-auto">
                <div className="h-3/4 border-2 border-black rounded-xl">
                  <img
                    src={AgileImg}
                    alt="Agile"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <h4 className="italic underline md:text-xl font-[headline] mt-4">
                  Future Focus:
                </h4>
                <h5 className="text-sm md:text-lg text-[para] leading-6">
                  Round-the-year Coaching in Badminton, Tennis, Table Tennis and
                  Martial Arts for Girls.
                </h5>
              </div>
              <div className="lg:w-[60%] h-full">
                <p className="md:text-xl font-[para] leading-6">
                  The student community for games and sports promotes and
                  participation in different competitive events in athletics,
                  badminton, basketball, cricket, football, table tennis,
                  volleyball and to give a strong thrust in these activities
                  organises round the year coaching.
                </p>
                <p className="md:text-xl font-[para] leading-6">
                  AGILE maintains ‘ADROIT’- the sophisticated college Gym for
                  boys and girls.
                </p>
                <h4 className="md:text-xl font-[headline]">
                  Round-the-year prolonged Coaching by State-Level Coaches in:
                </h4>
                <ul className="text-sm md:text-lg leading-6 text-[para] flex gap-4 flex-wrap">
                  <li className="p-1 px-2 border-2 border-neutral-300 rounded-lg bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    Basketball (boys & girls)
                  </li>
                  <li className="p-1 px-2 border-2 border-neutral-300 rounded-lg bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    Cricket
                  </li>
                  <li className="p-1 px-2 border-2 border-neutral-300 rounded-lg bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    Football
                  </li>
                  <li className="p-1 px-2 border-2 border-neutral-300 rounded-lg bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    Volleyball
                  </li>
                  <li className="p-1 px-2 border-2 border-neutral-300 rounded-lg bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    Taekwondo (for girls)
                  </li>
                </ul>
                <h4 className="underline text-xl font-[headline]">
                  Participation:
                </h4>
                <h4 className="text-sm md:text-lg font-[para] leading-6">
                  Since 2011 our basketball team, football team and volleyball
                  team have participated every year in PARAKRAM, the annual
                  sports meet of ISM Dhanbad and SPARDHA, IT BHU.
                </h4>

                <h4 className="italic underline md:text-xl font-[headline]">
                  A Few Achievements of our Students:
                </h4>
                <ul className="text-sm md:text-lg text-[para] leading-6">
                  <li>
                    &#x2022; AOT is the defending champion of MAKAUT in
                    basketball.
                  </li>
                  <li>
                    &#x2022; 7 of our basketball players are University Blues.
                  </li>
                  <li>
                    &#x2022; Our Volleyball Team was the winner among 16
                    colleges in Tournament Reloaded organised by Techno India,
                    Saltlake in 2017.
                  </li>
                  <li>
                    &#x2022; Our Football Team was the champion in PARAKRAM 2016
                    (ISM Dhanbad)
                  </li>
                  <li>
                    &#x2022; Our Basketball Girls Team won the title of champion
                    in Inter-College Basket Ball Tournament organized by MCKV in
                    2015
                  </li>
                  <li>
                    &#x2022; Diptiman Chowdhury (ECE 2016 Batch) won 2nd
                    Position (male) and Oliva Shah (ECE 2016 Batch) won 2nd
                    Position (female) in TCS Fit4life Campus Challenge 5 km
                    marathon, 2015.
                  </li>
                  <li>
                    &#x2022; Our Volleyball team was semi-finalist and our
                    Football Team was runners-up in PARAKRAM 2014.
                  </li>
                  <li>
                    &#x2022; Our Football Team was quarter finalist in PARAKRAM
                    2013
                  </li>
                  <li>
                    &#x2022; Our Basketball team was semi-finalist in SPARDHA
                    (IT BHU) 2012
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="bg-white w-32 h-32 p-4 rounded-full border-2 border-black overflow-hidden">
                <img src={AcuityLogo} alt="Acuity" className="w-full h-full" />
              </div>
              <h1 className="text-2xl md:text-3xl font-[headline]">
                Acuity - The Technical Club
              </h1>
            </div>

            <div className="m-12 flex flex-col-reverse lg:flex-row justify-center gap-8 borde">
              <div className="lg:w-[60%] h-full">
                <p className="md:text-xl font-[para] leading-6">
                  The Community for technological innovations provides a
                  platform to aspiring engineers of AOT to show their
                  innovations spanning several spheres of software, hardware and
                  robotics through competitive events, modeling, publications
                  and technical quiz.
                </p>
                <p className="md:text-xl font-[para] leading-6">
                  Every year TECH-FIESTA – the state level Tech Fest of AOT is
                  organized by ACUITY.
                </p>
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                  A Few Achievements of our Students:
                </h4>
                <ul className="md:text-lg">
                  <li>
                    &#x2022; AOT’s students are known for their keen interest in
                    different kinds of coding and technical innovation contests
                    as well as the Techfests organized across India. The college
                    frequently features amongst the list of top ten colleges
                    participating in events like TCS Codevita and EngineX.
                  </li>
                  <li>
                    &#x2022; In 2017, after the initial selections, two teams
                    from AOT have secured positions among the top 25 teams of
                    the country in EngineX – Ashwini Kumar Singh, Atrik Maitra,
                    Biswa Pratim Mukherjee, Danish Kamal (3rd yr ME) for their
                    project on Smart Precision Farming and Sarbajit Paul,
                    Sarthak Bakshi, Saurabh Kanishka, Samudra Roy (3rd yr CSE)
                    for their project on Intelligent Transport System.
                  </li>
                  <li>
                    &#x2022; In 2016, an overwhelming number of 1700 students
                    participated in Codevita. AOT has also had the maximum
                    number of participants in Techfests organized by IIT
                    Kharagpur, NIT Duragpur, IIEST, IEM, etc.
                  </li>
                  <li>
                    &#x2022; Besides these, over the past 3 years, a student
                    from AOT has been among the handful of top students from
                    across the country to be selected as Google Student
                    Ambassador (GSA): Jit Sarkar (4th yr CSE) this year,
                    Nakshatra Mukhopadhyay (IT 2016 Batch) last year & Mohonish
                    Chakraborty (CSE 2015 Batch) before that.
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={AcuityImg}
                  alt="Acuity"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
            <div className="m-12 flex flex-col lg:flex-row justify-center gap-8 borde">
              <div className="lg:w-[50%] h-full">
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                  Robotics:
                </h4>
                <ul className="text-sm md:text-lg">
                  <li>
                    &#x2022; Nikunj Sharma (3rd yr ECE) and his team won the
                    Best Mechanical Design Award in Robotics at Kshitij 2016
                    (IIT Kharagpur)
                  </li>
                  <li>
                    &#x2022; Sayak Bhar & Subhramoy Dey (3rd yr ECE) won 1st
                    prize in Sand Rover at Kshitij 2017 (IIT Kharagpur) and 2nd
                    and 3rd prizes in two Robotics events in Arohan 2017 (NIT
                    Durgapur)
                  </li>
                  <li>
                    &#x2022; Jaiswant Sethi, Devi Prasad Tiwari, Irshad Ali &
                    Ivan Mitra (2nd yr ME) won 1st prize in Snake and Ladder
                    Robotics & 2nd prize in Step up at Srijan 2017 (Jadavpur
                    University) and 2nd prize in Robbo Zigger (HETC) in 2017
                  </li>
                  <li>
                    &#x2022; Sonu Gupta, Sidhant Gupta & Sourav Payra (3rd yr
                    CSE) won 2nd prize in the Manual Robotics event Bomb
                    Disposal at IIT Kharagpur in 2017
                  </li>
                  <li>
                    &#x2022; Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr
                    ECE), won 1st prize in Robo-Soccer in Srijan 2017 (Jadavpur
                    University), Techtix 2017 (Kalyani Government Engineering
                    College), Vivarta 2017 (Techno India University); 2nd prize
                    in Robo-race in Karmatech 2017 (Government College of
                    Engineering and Ceramic Technology); 2nd prize in Kick-o-Bot
                    in Techtrix 2017 (RCC IIT) and many others
                  </li>
                  <li>
                    &#x2022; Sudip Halder (4th yr ECE) was the Technical
                    Representative at Techniche 2016 (IIT Guwahati) & Instruo
                    2016 (IIEST Shibpur); RSE of Technology Robotix Society (IIT
                    Kharagpur) and Campus Ambassador of Techkriti 2017 (IIT
                    Kanpur)
                  </li>
                </ul>
              </div>

              <div className="lg:w-[50%] h-full">
                <h4 className="italic underline text-lg md:text-2xl font-[headline]">
                  Presentations/ Publications:
                </h4>
                <ul className=" text-sm md:text-lg leading-8">
                  <li>
                    &#x2022; Subarno Pal (4th yr CSE) published the paper
                    “Sentiment Analysis using Averaged Histogram” in IJCA –
                    International Journal of Computer Applications, Vol 162 No
                    12: 22-26, March 2017, DOI: 10.5120/ijca2017913421
                  </li>
                  <li>
                    &#x2022; Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr
                    ECE) “Smart Agricultural System: Better Accuracy and
                    Productivity”, presented in Devices for Integrated Circuit,
                    on March 23-24, 2017 organized by IEEE KGEC Student Branch
                    Chapter in association with Department of ECE-KGEC
                  </li>
                  <li>
                    &#x2022; Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr
                    ECE) “Next Generation Agricultural System”, Conference on
                    Modelling and Simulation 2017, organized by Association for
                    the Advancement of Modelling and Simulation Techniques in
                    Enterprises, in collaboration with IET-UK.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-12">
          <div className="w-[90%] mx-auto rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white lg:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="bg-white w-56 h-28 p-4 rounded-full border-2 overflow-hidden border-black">
                <img
                  src={AcclivitiesLogo}
                  alt="Acclivities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-[headline]">
                Agile - The Sports Club
              </h1>
            </div>

            <div className="m-12 flex flex-col lg:flex-row justify-center gap-8 borde">
              <div className="lg:w-[40%] h-auto border-2 border-black rounded-xl">
                <img
                  src={AcclivitiesImg}
                  alt="AcclivitiesImg"
                  className="w-full h-full rounded-xl"
                />
              </div>

              <div className="lg:w-[60%] h-full">
                <p className="md:text-xl font-[para] leading-6">
                  Contributing to social causes in a structured manner, members
                  of ACCLIVITES organise NSS activities, awareness programmes on
                  environmental issues, adult education and computer literacy
                  and also campaign against tobacco, drugs and alcohol addiction
                  and ragging.
                </p>
                <h4 className="italic text-xl font-[headline]">
                  Pre-eminent Activities of a few of our Students:
                </h4>
                <ul className="text-sm md:text-lg leading-8 text-[para]">
                  <li>
                    &#x2022; Vishal Parakh, (4th yr ECE), Zeeshan Mehboob (4th
                    yr IT), Ankita Dhanuka (4th yr ECE) & Shakshi Baid (4th yr
                    CSE) with some other students started an NGO, REVOL”YOU”TION
                    in 2015 that envisions spreading awareness about importance
                    of Proper Education by providing the under privileged
                    children with books and other basic necessities.
                  </li>
                  <li>
                    &#x2022; Abhiroop Banerjee (4th yr CSE) is one of the
                    founder members and General Secretary of a non-profitable
                    organization named ‘Porjanyo’ which does social work with
                    the help of some NGOs namely ‘Prantakatha’ and others.
                    Porjanyo also publishes online magazine named ‘Kolombuzz’.
                  </li>
                  <li>
                    &#x2022; Sanjana Majumdar (AEIE 2015 Batch) is a member of
                    Serve, an NGO aiming at “Making Education Happier for
                    Children and Fights against Students Suicide Attempts”
                  </li>
                  <li>
                    &#x2022; Priyanka Chowbey (CSE 2015 Batch) is a Volunteer
                    for CRY since 2012
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button><NavLink to={"/Signup"}>Signup</NavLink></button>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Students;

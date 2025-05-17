
import Header from './Header.jsx'
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Footer from './Footer.jsx';
export default function App() {
  
  return (
      <>
      <Header/>
      <div id='section1'> 
      <Section1/>
      </div>
      <div id='section2'>
      <Section2/>
      </div>
      <div id='section3'>
      <Section3/>
      </div>
      <div id='section4'>
      <Section4/>
      </div>
      <div id='section5'>
      <Section5/>
      </div>
      
      <Footer/>
      </>
  );
}
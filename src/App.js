import './App.css';
import Hero from './components/Hero';
import Works from './components/Works';
import Contact from './components/Contact';
import Who from './components/Who';
import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  color:white;
  scroll-snap-align:center;
 
  overflow-y:auto;
  scrollbar-width:none;
  &::-webkit-scrollbar{
    display:none;
  }
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;

// App.jsx
// This file acts as the main entry point for all the React concepts
// learned from the Quick Start documentation.

import MyButton from "./components/MyButton";
import JSXExample from "./jsx/JSXExample";
import Avatar from "./styling/Avatar";  
import Profile from "./data-display/Profile";
import LoginStatus from "./conditional-rendering/LoginStatus";
import ShoppingList from "./lists/ShoppingList";
import ClickButton from "./events/ClickButton";
import Counter from "./state/Counter";
import SharedCounter from "./props/SharedCounter";  

function App() {
  return (
    <>
      
    {/* Concept 1: Components */}
      <h1>Concept 1: React Components</h1>
      <MyButton />

      {/* Concept 2: JSX Wrapping with React Fragment */}
      <h1>Concept 2: JSX Wrapping with React Fragment</h1>
      <JSXExample />

      {/* Concept 3: Styling in React */}
      <h1>Concept 3: Adding Styles using className</h1>
      <Avatar />

      {/* Concept 4: Displaying Data */}
      <h1>Concept 4: Displaying Data using JSX</h1>
      <Profile />

      {/* Concept 5: Conditional Rendering */}
      <h1>Concept 5: Conditional Rendering</h1>
      <LoginStatus isLoggedIn={true} />



       {/* Concept 6: Rendering Lists */}
      <h1>Concept 6: Rendering Lists with map()</h1>
      <ShoppingList />

      {/* Concept 7: Handling Events */}
      <h1>Concept 7: Responding to Events</h1>
      <ClickButton />


        {/* Concept 8: State using useState */}
      <h1>Concept 8: Updating UI using State</h1>
      <Counter />

      {/* Concept 9: Props and Lifting State Up */}
      <h1>Concept 9: Sharing Data between Components (Props)</h1>
      <SharedCounter />

    </>
  );
}

export default App;
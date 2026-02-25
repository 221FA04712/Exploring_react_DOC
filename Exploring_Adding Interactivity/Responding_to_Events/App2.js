function App2()
{

    function handleClick(){
        alert("you clicked me");
    }
    return(
        <>

        <button>
            I dont do anything when you click me
        </button>
<br></br>
        <button onClick={handleClick}>
            Shows an Alert when you click me

        </button>
        <br>
        </br>

        <button onClick={()=>{alert("you Clicked me ")}}>
            handler declared using arrow function inline jsx
        </button>
        <br>
        </br>
        <button onClick={function(){alert("you Clicked me")}}>
            handler declared using function expression inline jsx
        </button>
        <br>
        </br>
          <button onClick={handleClick()}>
            Shows an Alert with out click just after refreshing the page
        </button>
        <br>
        </br>
        
<button onClick={alert('You clicked me!')}>
    This alert fires when the component renders, not when clicked!
</button>
        </>
        
    )
}
export default App2;
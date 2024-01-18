export const ActionLink = () => {
    const handleClick = e => {
      e.preventDefault();
      console.log("The link was clicked.");
    };
   const handleChange = () => {
    console.log(e);
   }
    return (
      <>
      <a href="/" onClick={handleClick} className="bg-slate-500 ">
        Click here
      </a>
      <input onChange= {handleChange} />
      </>
    );
   };
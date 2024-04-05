import Header from "./components/Header";
function App() {
  return (
    <div className='bg-black p-16'>
      <div className="bg-[#EFEFEF] p-10 border rounded-md" >
        <Header />
        <div style={{ backgroundColor: "#8272DA" }} className="px-10 py-5 border rounded-md">
          <h1 className="font-medium text-2xl">23</h1>
          <p>chennai</p>
        </div>
        <div style={{ backgroundColor: "#FD6663" }} className="px-10 py-5 border rounded-md">
          <h1 className="font-medium text-2xl">April 05</h1>
          <p>14:23:08</p>
        </div>
        <div style={{ backgroundColor: "#FCA201" }} className="px-10 py-5 border rounded-md">
          <h1 className="font-medium text-2xl">Built Using</h1>
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default App;

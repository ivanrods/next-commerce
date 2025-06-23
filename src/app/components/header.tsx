
function Header() {
  return (
     <div className="h-84 bg-[url('/bg.jpg')] bg-cover bg-center">
      
      <div className="flex flex-col gap-2 items-center justify-center h-full bg-black/60 px-2">
        <h1 className="text-white text-4xl font-bold">Bem-vindo ao NightShift Commerce</h1>
        <p className="text-white">Loja de roupas urbanas com tema escuro e moderna</p>
      </div>
    </div>
   
  );
}
export default Header;

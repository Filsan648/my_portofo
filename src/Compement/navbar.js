function Navbar () {
  return (
    <div className="flex justify-between items-center px-10 py-4 font-satoshi sticky top-0 z-50 ">
      <nav className="font-bold text-xl" >Portofolio.</nav>
      <div className="flex gap-10 text-base">
        <nav>Index</nav>
        <nav>Profil</nav>
        <nav>Compétence</nav>
        <nav>Projet</nav>
      </div>
      <nav className="text-xl border px-4 py-1 border-stone-500 rounded">Contact</nav>
    </div>
  );
}
export default Navbar;
const Collapsible = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className={`absolute z-50 w-full bg-white sm:rounded-b-lg top-[100px] left-1/2 -translate-x-1/2 ${collapsed ? 'h-0': 'sm:h-[80px] h-[200px]'} transition-all delay-50 duration-300 overflow-hidden`}>
      <ul className={`flex sm:flex-row flex-col sm:items-center justify-center gap-x-14 gap-y-4 font-medium border w-full h-full py-5 px-4 ${collapsed ? 'opacity-0': 'opacity-100'} sm:transition-none transition-all delay-50 duration-300`}>
        <li>Home</li>
        <li>Recipes</li>
        <li>Categories</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Collapsible
